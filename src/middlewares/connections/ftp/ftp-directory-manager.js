const { reconnectFTP } = require("./ftp-helpers");
const { getFtpConnectionById } = require("./ftp-manager");
const {
  loadPreviousState,
  getAddedOrUpdatedFiles,
  processNewFiles,
  saveCurrentState,
  getCurrentFiles,
} = require("./ftp-file-manager");

// Manejo de reconexión simplificado
async function handleReconnection(equipment) {
  try {
    const connection = await reconnectFTP(equipment);
    // Intentar reconectar

    if (!connection || connection.client.closed) {
      connection.client.close();
      throw new Error(`Reconexión fallida para el equipo ${equipment.name}`);
    }

    return connection;
  } catch (error) {
    console.error(
      `Ocurrió un error al intentarse reconectar con el equipo ${equipment.name} con IPv4 ${equipment.ip_address}:${equipment.port} =>`,
      error.message
    );
    return null;
  }
}

// Función principal
async function startMonitoringDirectory(equipment) {
  try {
    detectChanges(equipment); // Inicia la detección inicial
  } catch (error) {
    console.error(
      "Error al iniciar la monitorización del directorio:",
      error.message
    );
  }
}

async function detectChanges(equipment) {
  let previousFiles = loadPreviousState(equipment.mac_address);
  let isChecking = false;

  let connection = getFtpConnectionById(equipment.id_device);
  if (isChecking || connection.reconnecting || !connection) return;

  isChecking = true;

  try {
    if (connection.client.closed) {
      connection = await handleReconnection(equipment);
      if (!connection) return;
    }

    const currentFiles = await getCurrentFiles(connection.client);
    const addedFiles = getAddedOrUpdatedFiles(currentFiles, previousFiles);

    if (addedFiles.length > 0) {
      console.log(
        `Archivos añadidos en ${equipment.name}:`,
        addedFiles.map((f) => f.name)
      );
      await processNewFiles(connection.client, equipment, addedFiles);
    }

    saveCurrentState(equipment.mac_address, currentFiles);
    previousFiles = currentFiles;
  } catch (error) {
    if (["ECONNRESET", 421, 503, 530].includes(error.code)) {
      console.error(
        `Error de conexión en el equipo ${equipment.name}:`,
        error.message
      );
    } else {
      console.error(
        `Error al detectar cambios en el equipo ${equipment.name} en el directorio:`,
        error.message
      );
    }
  } finally {
    isChecking = false;

    if (connection) {
      // Esperar el tiempo de retardo antes de reconectar
      await new Promise((resolve) => setTimeout(resolve, 1000));
      detectChanges(equipment);
    }
  }
}

module.exports = { startMonitoringDirectory };
