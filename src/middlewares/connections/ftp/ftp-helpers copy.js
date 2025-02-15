const ftp = require("basic-ftp"); // Importa el cliente FTP
const {
  formatMacAddressWithSeparators,
} = require("../../../utils/formatMacAddressWithSeparators");
const {
  emitStatusDevice,
} = require("../../../lib/websocket/emit-device-status");
// Variable para almacenar las conexiones FTP activas
let ftpConnections = {};

// Configuración del límite y la frecuencia de reconexión
const MAX_RETRIES = 5;
const INITIAL_DELAY = 1000; // 1 segundo

function emitClosedDevice(
  equipment,
  error = true,
  message = "Error en la conexión FTP"
) {
  emitStatusDevice(
    {
      last_connection: new Date(),
      connection_status: "disconnected",
    },
    equipment,
    message,
    error
  );
}

function emitOpenedDevice(equipment, message) {
  emitStatusDevice(
    {
      require_ftp_conn: true,
      last_connection: new Date(),
      connection_status: "connected",
    },
    equipment,
    message
  );
}

// Obtiene todas las
function getFtpConnections() {
  return ftpConnections;
}

function setFtpConnections(connections) {
  return (ftpConnections = connections);
}

function addClientFtpConnection(macAddress, client) {
  // Validar que macAddress y client sean válidos
  if (!macAddress || !client) {
    throw new Error("macAddress y client son requeridos");
  }

  // Obtener las conexiones actuales
  const connections = getFtpConnections();

  // Agregar o actualizar la conexión
  connections[macAddress] = {
    client,
    reconnecting: false,
  };

  // Actualizar la variable global
  setFtpConnections(connections);
}

function updateFtpConnection(macAddress, options) {
  const connections = getFtpConnections();
  const ftpConnectionToUpdate = connections[macAddress];

  if (ftpConnectionToUpdate) {
    // Mezclar el estado anterior con los nuevos atributos
    const updatedConnection = { ...ftpConnectionToUpdate, ...options };
    connections[macAddress] = updatedConnection;

    // Actualizar la variable global
    setFtpConnections(connections);

    return updatedConnection; // Retornar la conexión actualizada para consistencia
  }
  console.warn(
    `Conexión con MAC ${macAddress} no encontrada al intentar actualizar.`
  );
  return null;
}

function deleteFtpConnection(macAddress) {
  delete ftpConnections[macAddress];
  console.log("Cliente FTP eliminado");
}

async function addFtpConnection(equipment, retryCount = 0) {
  const ftpConnections = getFtpConnections();

  // Si ya existe una conexión, ciérrala antes de intentar una nueva conexión
  const existConnection = ftpConnections[equipment.mac_address];
  if (existConnection && !existConnection.client.closed) {
    await closeFTP(equipment.mac_address);
  }

  // Creamos un objeto de la clase ftp
  const client = new ftp.Client();

  // Agregamos el estado de reconexión específico al equipo
  addClientFtpConnection(equipment.mac_address, client);

  try {
    // Intentamos acceder al servidor FTP
    await client.access({
      host: equipment.ip_address,
      port: equipment.port,
      user: "stevlabserver",
      password: "annon",
      secure: true, // TLS explícito
      sessionReuse: false,
      passive: true, // Habilita el modo pasivo
      secureOptions: {
        rejectUnauthorized: false,
        maxVersion: "TLSv1.2",
      }, // Permitir certificados autofirmados
    });

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
    console.error(
      `Error al conectar FTP con el equipo ${
        equipment.name
      }: (${formatMacAddressWithSeparators(
        equipment.mac_address
      )}) con dirección IPv4 ${equipment.ip_address}:${equipment.port} `,
      error.message
    );

    emitClosedDevice(
      equipment,
      true,
      `Error al conectar FTP con el equipo ${
        equipment.name
      }: (${formatMacAddressWithSeparators(
        equipment.mac_address
      )}) con dirección IPv4 ${equipment.ip_address}:${equipment.port} ${
        error.message
      }`
    );

    // Si hay un error y no se ha alcanzado el máximo de intentos, realizar reconexión con retardo
    const delay = INITIAL_DELAY * 2 ** retryCount; // Incrementa el tiempo de espera exponencialmente
    console.log(`Reintentando conexión en ${delay / 1000} segundos...`);

    // Esperar el tiempo de retardo antes de reconectar
    await new Promise((resolve) => setTimeout(resolve, delay));
    return addFtpConnection(equipment, retryCount + 1); // Intento de reconexión
  }
}

// Función para cerrar la conexión FTP
async function closeFTP(equipment) {
  const ftpConnections = getFtpConnections();
  const connection = ftpConnections[equipment.mac_address];

  if (!connection || !connection.client) {
    console.log(`No hay cliente activo para ${equipment.mac_address}.`);
    return;
  }

  const { client } = connection;

  try {
    if (client.closed) {
      await client.close();
      console.log(`Conexión cerrada para ${equipment.mac_address}.`);
    }
  } catch (error) {
    console.error(
      `Error cerrando conexión para ${equipment.mac_address}:`,
      error.message
    );
  } finally {
    emitClosedDevice(equipment);
    deleteFtpConnection(equipment.mac_address);
  }
}

// Función para reconectar el cliente FTP en caso de desconexión
async function reconnectFTP(equipment, maxRetries = 5, attempt = 1) {
  const ftpConnections = getFtpConnections();
  const connection = ftpConnections[equipment.mac_address];

  if (!connection) {
    console.error(`No se encontró una conexión para ${equipment.mac_address}.`);
    return;
  }

  const { client } = connection;

  // Marcar como "en proceso de reconexión"
  updateFtpConnection(equipment.mac_address, { reconnecting: true });

  try {
    // Cerrar el cliente si está cerrado
    if (!client || client.closed) {
      await client.close();
      console.log(
        `Cliente FTP cerrado correctamente para ${equipment.name} (${equipment.mac_address}).`
      );

      emitClosedDevice(equipment);
    }

    // Intentar reconectar
    console.log(
      `Intentando reconectar con ${equipment.name} (${equipment.ip_address}:${equipment.port}), intento ${attempt}...`
    );
    await client.access({
      host: equipment.ip_address,
      port: equipment.port,
      user: "stevlabserver",
      password: "annon",
      secure: true,
      sessionReuse: false,
      passive: true, // Habilita el modo pasivo
      secureOptions: {
        rejectUnauthorized: false,
        maxVersion: "TLSv1.2",
      },
    });

    console.log(
      `Reconexión exitosa con ${equipment.name} (${equipment.mac_address}).`
    );
    emitOpenedDevice(equipment);
  } catch (error) {
    console.error(
      `Error al reconectar con ${
        equipment.name
      } (${formatMacAddressWithSeparators(equipment.mac_address)}):`,
      error.message
    );
    emitClosedDevice(
      equipment,
      true,
      `Error al reconectar con ${
        equipment.name
      } (${formatMacAddressWithSeparators(equipment.mac_address)}): ${
        error.message
      }`
    );

    if (attempt < maxRetries) {
      console.log(`Reintentando reconectar (${attempt + 1}/${maxRetries})...`);
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Esperar antes del próximo intento
      return reconnectFTP(equipment, maxRetries, attempt + 1);
    }

    console.error(`Máximo de reintentos alcanzado para ${equipment.name}.`);
  } finally {
    // Asegurarse de actualizar el estado reconectando
    updateFtpConnection(equipment.mac_address, { reconnecting: false });
  }
}

module.exports = {
  getFtpConnections,
  addFtpConnection,
  deleteFtpConnection,
  updateFtpConnection,
  reconnectFTP,
};
