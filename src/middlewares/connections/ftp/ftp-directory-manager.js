const fs = require("node:fs");
const path = require("node:path");
const { STATES, FILE_UPLOADS_DIR } = require("../../../constants/CONFIG_DIR");
const {
  getFtpConnections,
  updateFtpConnection,
  reconnectFTP,
} = require("./ftp-helpers");
const { processData } = require("../../../lib/process-data");
const {
  formatMacAddressWithSeparators,
} = require("../../../utils/formatMacAddressWithSeparators");
const {
  getReconnectInterval,
  setReconnectInterval,
  removeReconnectInterval,
} = require("../reconnect-manager");

// Helpers para manejo de archivos
function loadPreviousState(filePath) {
  if (fs.existsSync(filePath)) {
    return JSON.parse(fs.readFileSync(filePath));
  }
  fs.writeFileSync(filePath, JSON.stringify([])); // Crear archivo vacío si no existe
  return [];
}

function saveCurrentState(filePath, currentFiles) {
  fs.writeFileSync(filePath, JSON.stringify(currentFiles));
}

function getAddedOrUpdatedFiles(currentFiles, previousFiles) {
  return currentFiles.filter((currentFile) => {
    // Buscar un archivo con el mismo nombre en los archivos anteriores
    const previousFile = previousFiles.find(
      (prevFile) => prevFile.name === currentFile.name
    );
    // Si no existe en los archivos anteriores o si la fecha de modificación es distinta
    return (
      !previousFile || previousFile.rawModifiedAt !== currentFile.rawModifiedAt
    );
  });
}

function getRemovedFiles(currentFiles, previousFiles) {
  return previousFiles.filter(
    (prevFile) =>
      !currentFiles.some((currentFile) => currentFile.name === prevFile.name)
  );
}
// Manejo de reconexión
async function handleReconnection(
  equipment,
  reconnectAttempts,
  maxRetries = 8
) {
  const idDevice = equipment.mac_address;

  // Verificar si ya hay un intervalo de reconexión en curso para este dispositivo
  if (getReconnectInterval(idDevice)) {
    console.log(`Ya hay una reconexión en curso para ${equipment.name}.`);
    return null;
  }

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
  updateFtpConnection(equipment.mac_address, { reconnecting: true });

  // Configurar un intervalo de reconexión
  const interval = setInterval(async () => {
    await reconnectFTP(equipment);
  }, 1000); // Intentar reconectar cada segundo
  setReconnectInterval(idDevice, interval);

  // Esperar a que la reconexión sea exitosa o se alcance el máximo de intentos
  const connection = await waitForReconnection(equipment, maxRetries);

  // Limpiar el intervalo después de la reconexión
  removeReconnectInterval(idDevice);

  if (!connection || connection.client.closed) {
    console.error(`Reconexión fallida para el equipo ${equipment.name}`);
    return null;
  }

  reconnectAttempts = 0;
  return connection;
}

// Función para esperar a que la reconexión sea exitosa
async function waitForReconnection(equipment, maxRetries) {
  const idDevice = equipment.mac_address;
  let attempts = 0;

  return new Promise((resolve) => {
    const checkConnection = setInterval(async () => {
      const ftpConnections = getFtpConnections();
      const connection = ftpConnections[idDevice];

      if (connection && !connection.client.closed) {
        clearInterval(checkConnection);
        resolve(connection);
      } else if (attempts >= maxRetries) {
        clearInterval(checkConnection);
        resolve(null);
      } else {
        attempts++;
      }
    }, 1000); // Verificar cada segundo
  });
}

// Procesamiento de archivos
async function processNewFiles(connection, equipment, addedFiles) {
  for (const addedFile of addedFiles) {
    try {
      const localPathToDownload = path.join(FILE_UPLOADS_DIR, addedFile.name);
      await timeoutPromise(
        connection.client.downloadTo(localPathToDownload, `/${addedFile.name}`),
        10000
      );
      const message = fs.readFileSync(localPathToDownload, "utf8");
      processData(equipment, message);
      console.log(`Archivo procesado: ${addedFile.name}`);
    } catch (error) {
      console.error(`Error al descargar/procesar ${addedFile}:`, error.message);
    }
  }
}

// Función principal
async function startMonitoringDirectory(equipment) {
  const previousStateFile = path.join(
    STATES,
    `${equipment.mac_address}-previous-state.json`
  );

  let previousFiles = loadPreviousState(previousStateFile);
  let isChecking = false;
  let reconnectAttempts = 0;
  let maxReconnectAttempts = 8; // Máximo de intentos de reconexión
  let flag = false;

  async function detectChanges() {
    if (flag) return
    if (isChecking) return;
    isChecking = true;

    let ftpConnections = getFtpConnections();
    let connection = ftpConnections[equipment.mac_address];
    try {
      if (!connection || !connection.client || connection.client.closed) {
        if (reconnectAttempts >= maxReconnectAttempts) {
          console.error(
            `Máximo de intentos de reconexión alcanzado para ${equipment.name}. Deteniendo la verificación.`
          );
          flag = true;
          return; // Detener la verificación si se alcanza el máximo de intentos
        }

        connection = await handleReconnection(equipment, reconnectAttempts++);
        if (!connection) return;
      }

      const currentFiles = (
        await timeoutPromise(connection.client.list("/"), 5000)
      ).map((file) => file);
      const addedFiles = getAddedOrUpdatedFiles(currentFiles, previousFiles);
      const removedFiles = getRemovedFiles(currentFiles, previousFiles);

      if (addedFiles.length > 0) {
        console.log(`Archivos añadidos en ${equipment.name}:`, addedFiles);
        await processNewFiles(connection, equipment, addedFiles);
      }

      if (removedFiles.length > 0) {
        console.log(`Archivos eliminados en ${equipment.name}:`, removedFiles);
      }

      saveCurrentState(previousStateFile, currentFiles);
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
      setTimeout(detectChanges, 1000);
    }
  }

  detectChanges(); // Inicia la detección inicial
}

// Helper para manejar tiempos de espera
function timeoutPromise(promise, ms) {
  const timeout = new Promise((_, reject) =>
    setTimeout(() => reject(new Error("Timeout alcanzado")), ms)
  );
  return Promise.race([promise, timeout]);
}

module.exports = { startMonitoringDirectory };
