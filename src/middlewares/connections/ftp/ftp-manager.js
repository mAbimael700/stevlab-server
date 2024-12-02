const fs = require("node:fs");
const path = require("node:path");
const { STATES, FILE_UPLOADS_DIR } = require("../../../constants/CONFIG_DIR");
const { getFtpConnections, updateFtpConnection, reconnectFTP } = require("./ftp-helpers");
const { processData } = require("../../../lib/process-data");
const { formatMacAddressWithSeparators } = require("../../../utils/formatMacAddressWithSeparators");

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

// Helpers para detectar cambios
function getAddedFiles(currentFiles, previousFiles) {
    return currentFiles.filter(file => !previousFiles.includes(file));
}

function getRemovedFiles(currentFiles, previousFiles) {
    return previousFiles.filter(file => !currentFiles.includes(file));
}

// Manejo de reconexión
async function handleReconnection(equipment, reconnectAttempts, maxRetries = 5) {
    /* if (reconnectAttempts >= maxRetries) {
        console.error(`Máximo de intentos de reconexión alcanzado para ${equipment.name}`);
        return null;
    } */

    console.log(`Intentando reconectar con ${equipment.name} (${formatMacAddressWithSeparators(equipment.mac_address)})...`);
    updateFtpConnection(equipment.mac_address, { reconnecting: true });

    await reconnectFTP(equipment);

    // Actualizar conexión después de reconectar
    const ftpConnections = getFtpConnections();
    const connection = ftpConnections[equipment.mac_address];
    updateFtpConnection(equipment.mac_address, { reconnecting: false });

    if (!connection || connection.client.closed) {
        console.error(`Reconexión fallida para el equipo ${equipment.name}`);
        return null;
    }

    return connection;
}

// Procesamiento de archivos
async function processNewFiles(connection, equipment, addedFiles) {
    for (const addedFile of addedFiles) {
        try {
            const localPathToDownload = path.join(FILE_UPLOADS_DIR, addedFile);
            await timeoutPromise(
                connection.client.downloadTo(localPathToDownload, `/${addedFile}`),
                10000
            );
            const message = fs.readFileSync(localPathToDownload, "utf8");
            processData(equipment, message);
            console.log(`Archivo procesado: ${addedFile}`);
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

    async function detectChanges() {
        if (isChecking) return;
        isChecking = true;


        let ftpConnections = getFtpConnections();
        let connection = ftpConnections[equipment.mac_address];
        try {


            if (!connection || !connection.client || connection.client.closed) {
                connection = await handleReconnection(equipment, reconnectAttempts++);
                if (!connection) return;
            }

            const currentFiles = (await timeoutPromise(connection.client.list("/"), 5000)).map(file => file.name);
            const addedFiles = getAddedFiles(currentFiles, previousFiles);
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
                console.error(`Error de conexión con ${equipment.name}:`, error.message);
                connection = await handleReconnection(equipment, reconnectAttempts++);
            } else {
                console.error("Error al detectar cambios en el directorio:", error.message);
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
