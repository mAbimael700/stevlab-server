const { addFtpConnection } = require("./ftp-helpers");
const { startMonitoringDirectory } = require("./ftp-directory-manager");
const { emitClosedDevice } = require("./ftp-fn");
const { getFtpConnectionById, deleteFtpConnection } = require("./ftp-manager");

async function connectFTP(equipment) {
  try {
    // Si ya existe una conexión, ciérrala antes de intentar una nueva conexión
    const connection = getFtpConnectionById(equipment.id_device);

    if (connection && !connection.client.closed) {
      closeFTP(equipment);
    }

    await addFtpConnection(equipment);
    await startMonitoringDirectory(equipment);
  } catch (error) {
    console.error("Ocurrió un error al conectarse el equipo", error.message);
  }
}

// Función para cerrar la conexión FTP
function closeFTP(equipment) {
  const connection = getFtpConnectionById(equipment.id_device);
  const client = connection.client;

  if (!connection || !client) {
    console.warn(
      `No hay un cliente de conexión activo para ${equipment.name}.`
    );
    return;
  }

  try {
    client.close();
    client.closed = true
    console.log(`Conexión cerrada para el equipo ${equipment.name}.`);
    emitClosedDevice(equipment);
    deleteFtpConnection(equipment.id_device);
  } catch (error) {
    console.error(
      `Error cerrando conexión para el equipo ${equipment.name}:`,
      error.message
    );
  }
}

module.exports = {
  connectFTP,
  closeFTP,
};
