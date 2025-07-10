const fs = require("node:fs");
const path = require("node:path");
const { Client } = require("basic-ftp");
const { processData } = require("../../../lib/process-data");
const { STATES, FILE_UPLOADS_DIR } = require("../../../constants/CONFIG_DIR");

async function getCurrentFiles(client) {
  return (await timeoutPromise(client.list("/"), 5000)).map(
    (file) => file
  );
}

function generateFilePath(macAddress) {
  return path.join(STATES, `${macAddress}-previous-state.json`);
}

// Helpers para manejo de archivos
function loadPreviousState(macAddress) {
  const filePath = generateFilePath(macAddress);

  if (fs.existsSync(filePath)) {
    return JSON.parse(fs.readFileSync(filePath));
  }
  fs.writeFileSync(filePath, JSON.stringify([])); // Crear archivo vacío si no existe
  return [];
}

function saveCurrentState(macAddress, currentFiles) {
  const filePath = generateFilePath(macAddress);
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
      (!previousFile ||
        previousFile.rawModifiedAt !== currentFile.rawModifiedAt) &&
      currentFile.type !== 2
    );
  });
}

function getRemovedFiles(currentFiles, previousFiles) {
  return previousFiles.filter(
    (prevFile) =>
      !currentFiles.some((currentFile) => currentFile.name === prevFile.name)
  );
}

/**
 *
 * @param {Client} client
 * @param {object} equipment
 * @param {object[]} addedFiles
 */
async function processNewFiles(client, equipment, addedFiles) {
  for (const addedFile of addedFiles) {
    try {
      const localPathToDownload = path.join(FILE_UPLOADS_DIR, addedFile.name);
      await timeoutPromise(
        client.downloadTo(localPathToDownload, `/${addedFile.name}`),
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

// Helper para manejar tiempos de espera
function timeoutPromise(promise, ms) {
  const timeout = new Promise((_, reject) =>
    setTimeout(() => reject(new Error("Timeout alcanzado")), ms)
  );
  return Promise.race([promise, timeout]);
}

module.exports = {
  getCurrentFiles,
  loadPreviousState,
  getAddedOrUpdatedFiles,
  getRemovedFiles,
  processNewFiles,
  saveCurrentState,
  timeoutPromise,
};
