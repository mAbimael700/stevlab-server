const ftp = require("basic-ftp"); // Importa el cliente FTP
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

async function addFtpConnection(equipment, retryCount = 0) {
  // Creamos un objeto de la clase ftp
  const client = new ftp.Client();

  // Agregamos el estado de reconexión específico al equipo
  setFtpConnection(equipment.id_device, client);

  try {
    // Intentamos acceder al servidor FTP
    await client.access(createOptions(equipment));

    const message = `Conexión FTP establecida con el equipo ${equipment.name} con dirección IPv4 ${equipment.ip_address}:${equipment.port}`;
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
    let errorMsg = `Error al conectar con el equipo ${equipment.name} con dirección IPv4 ${equipment.ip_address}:${equipment.port} -> ${error.message}`;
    console.error(errorMsg);
    emitClosedDevice(equipment, true, errorMsg);
  }
}

// Función para reconectar el cliente FTP
async function reconnectFTP(equipment, maxRetries = 5, attempt = 1) {
  try {
    const connection = getFtpConnectionById(equipment.id_device);

    if (!connection) {
      throw new Error(
        `No se encontró una conexión para el equipo ${equipment.name}.`
      );
    }

    if (connection.reconnecting) {
      throw new Error(`Ya se está reconectando con ${equipment.name}.`);
    }

    updateFtpConnection(equipment.id_device, { reconnecting: true });

    if (connection.client && !connection.client.closed) {
      connection.client.close();
      console.log(`Cliente FTP cerrado correctamente para ${equipment.name}.`);
      emitClosedDevice(equipment);
    }

    console.log(
      `Intentando reconectar con ${equipment.name}, intento ${attempt}...`
    );
    await connection.client.access(createOptions(equipment));

    console.log(`Reconexión exitosa con ${equipment.name}.`);
    emitOpenedDevice(equipment);
    return getFtpConnectionById(equipment.id_device);
  } catch (error) {
    console.error(
      `Error al reconectar con ${equipment.name} con IPv4: ${equipment.ip_address}:${equipment.port}`,
      error.message
    );
    connection.client.close();
    emitClosedDevice(equipment, true, error.message);

    if (attempt < maxRetries) {
      console.log(`Reintentando reconectar (${attempt + 1}/${maxRetries})...`);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return reconnectFTP(equipment, maxRetries, attempt + 1);
    }

    console.error(`Máximo de reintentos alcanzado para ${equipment.name}.`);
    return null;
  } finally {
    updateFtpConnection(equipment.id_device, { reconnecting: false });
  }
}

module.exports = {
  addFtpConnection,
  updateFtpConnection,
  reconnectFTP,
};
