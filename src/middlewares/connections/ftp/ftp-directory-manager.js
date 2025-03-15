const { reconnectFTP } = require("./ftp-helpers");
const {
  formatMacAddressWithSeparators,
} = require("../../../utils/formatMacAddressWithSeparators");
const { getFtpConnectionById } = require("./ftp-manager");
const {
  loadPreviousState,
  getAddedOrUpdatedFiles,
  getRemovedFiles,
  processNewFiles,
  saveCurrentState,
  getCurrentFiles,
} = require("./ftp-file-manager");

// Manejo de reconexión simplificado
async function handleReconnection(
  equipment,
  reconnectAttempts = 0,
  maxRetries = 8
) {
  // Verificar si ya se alcanzó el máximo de intentos
  if (reconnectAttempts >= maxRetries) {
    console.error(
      `Máximo de intentos de reconexión alcanzado para ${equipment.name}`
    );
    return null;
  }

  console.log(
    `Intentando reconectar con ${
      equipment.name
    } (${formatMacAddressWithSeparators(equipment.mac_address)})...`
  );

  // Intentar reconectar
  const connection = await reconnectFTP(equipment);

  if (!connection || connection.client.closed) {
    console.error(`Reconexión fallida para el equipo ${equipment.name}`);
    return null;
  }

  return connection;
}

// Función principal
async function startMonitoringDirectory(equipment) {
  let previousFiles = loadPreviousState(equipment.mac_address);

  let isChecking = false;

  async function detectChanges() {
    let connection = getFtpConnectionById(equipment.id_device);
    if (isChecking && connection.reconnecting) return;
    isChecking = true;

    try {
      if (!connection || !connection.client || connection.client.closed) {
        connection = await handleReconnection(equipment);
        if (!connection) return;
      }
      const currentFiles = await getCurrentFiles(connection.client);

      const addedFiles = getAddedOrUpdatedFiles(currentFiles, previousFiles);
      const removedFiles = getRemovedFiles(currentFiles, previousFiles);

      if (addedFiles.length > 0) {
        console.log(
          `Archivos añadidos en ${equipment.name}:`,
          addedFiles.map((f) => f.name)
        );
        await processNewFiles(connection.client, equipment, addedFiles);
      }

      if (removedFiles.length > 0) {
        console.log(`Archivos eliminados en ${equipment.name}:`, removedFiles);
      }

      saveCurrentState(equipment.mac_address, currentFiles);
      previousFiles = currentFiles;
    } catch (error) {
      if (["ECONNRESET", 421, 503, 530].includes(error.code)) {
        console.error(
          `Error de conexión con ${equipment.name}:`,
          error.message
        );
        connection = await handleReconnection(equipment, reconnectAttempts++);
      } else {
        console.error(
          "Error al detectar cambios en el directorio:",
          error.message
        );
      }
    } finally {
      isChecking = false;
      setTimeout(detectChanges, 1000); // Programar el próximo detectChanges solo si el monitor no está cerrado
    }
  }

  detectChanges(); // Inicia la detección inicial
}

module.exports = { startMonitoringDirectory };
