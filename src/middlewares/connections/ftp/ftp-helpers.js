const ftp = require("basic-ftp"); // Importa el cliente FTP
const {
  formatMacAddressWithSeparators,
} = require("../../../utils/formatMacAddressWithSeparators");
const {
  emitOpenedDevice,
  emitClosedDevice,
  createOptions,
} = require("./ftp-fn");
const {
  getFtpConnectionById,
  setFtpConnection,
  updateFtpConnection,
} = require("./ftp-manager");

// Configuración del límite y la frecuencia de reconexión
const INITIAL_DELAY = 1000; // 1 segundo

async function addFtpConnection(equipment, retryCount = 0) {
  // Creamos un objeto de la clase ftp
  const client = new ftp.Client();

  // Agregamos el estado de reconexión específico al equipo
  setFtpConnection(equipment.id_device, client);

  try {
    // Intentamos acceder al servidor FTP
    await client.access(createOptions(equipment));

    const message = `Conexión FTP establecida con el equipo ${
      equipment.name
    } (${formatMacAddressWithSeparators(
      equipment.mac_address
    )}) con dirección IPv4 ${equipment.ip_address}:${equipment.port}`;

    emitOpenedDevice(equipment, message);
    console.info(message);

    // Verificar el estado de la conexión luego de acceder
    if (client.closed) {
      console.warn("La conexión se cerró inesperadamente");
    } else {
      console.info("Conexión abierta y activa");
      emitOpenedDevice(equipment, message);
    }
  } catch (error) {
    let errorMsg = `Error al conectar FTP con el equipo ${
      equipment.name
    }: (${formatMacAddressWithSeparators(
      equipment.mac_address
    )}) con dirección IPv4 ${equipment.ip_address}:${equipment.port} ${
      error.message
    }`;

    console.error(errorMsg);
    emitClosedDevice(equipment, true, errorMsg);

    // Si hay un error y no se ha alcanzado el máximo de intentos, realizar reconexión con retardo
    const delay = INITIAL_DELAY * 2 ** retryCount; // Incrementa el tiempo de espera exponencialmente
    console.log(`Reintentando conexión en ${delay / 1000} segundos...`);

    // Esperar el tiempo de retardo antes de reconectar
    await new Promise((resolve) => setTimeout(resolve, delay));
    return addFtpConnection(equipment, retryCount + 1); // Intento de reconexión
  }
}

// Función para reconectar el cliente FTP
async function reconnectFTP(equipment, maxRetries = 5, attempt = 1) {
  const connection = getFtpConnectionById(equipment.id_device);

  if (!connection) {
    console.error(
      `No se encontró una conexión para el equipo ${equipment.name}.`
    );
    return null;
  }

  // Si ya se está reconectando, no hacer nada
  if (connection.reconnecting) {
    console.log(`Ya se está reconectando con ${equipment.name}.`);
    return null;
  }

  // Marcar como "en proceso de reconexión"
  updateFtpConnection(equipment.id_device, { reconnecting: true });

  try {
    // Cerrar el cliente si está abierto
    if (connection.client && !connection.client.closed) {
      connection.client.close();
      console.log(
        `Cliente FTP cerrado correctamente para ${equipment.name} (${equipment.mac_address}).`
      );
      emitClosedDevice(equipment);
    }

    // Intentar reconectar
    console.log(
      `Intentando reconectar con ${equipment.name} (${equipment.ip_address}:${equipment.port}), intento ${attempt}...`
    );

    await connection.client.access(createOptions(equipment));

    console.log(
      `Reconexión exitosa con ${equipment.name} (${equipment.mac_address}).`
    );
    emitOpenedDevice(equipment);
    return getFtpConnectionById(equipment.id_device);
  } catch (error) {
    const errorMsg = `Error al reconectar con ${
      equipment.name
    } (${formatMacAddressWithSeparators(equipment.mac_address)}): ${
      error.message
    }`;

    console.error(errorMsg);
    emitClosedDevice(equipment, true, errorMsg);

    // Reintentar si no se ha alcanzado el máximo de intentos
    if (attempt < maxRetries) {
      console.log(`Reintentando reconectar (${attempt + 1}/${maxRetries})...`);
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Esperar antes del próximo intento
      return reconnectFTP(equipment, maxRetries, attempt + 1);
    }

    console.error(`Máximo de reintentos alcanzado para ${equipment.name}.`);
    return null;
  } finally {
    // Asegurarse de actualizar el estado reconectando
    updateFtpConnection(equipment.id_device, { reconnecting: false });
  }
}

module.exports = {
  addFtpConnection,
  updateFtpConnection,
  reconnectFTP,
};
