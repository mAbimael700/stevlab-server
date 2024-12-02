const fs = require("node:fs");
const path = require("node:path");
const { STATES, FILE_UPLOADS_DIR } = require("../../../constants/CONFIG_DIR");
const { getFtpConnections, updateFtpConnection, reconnectFTP } = require("./ftp-helpers");
const { processData } = require("../../../lib/process-data");

// Función para monitorear cambios en el directorio remoto
async function startMonitoringDirectory(equipment) {
    const previousStateFile = path.join(
        STATES,
        `${equipment.mac_address}-previous-state.json`
    );

    // Cargar el estado anterior o inicializar uno vacío si no existe
    let previousFiles = [];
    if (fs.existsSync(previousStateFile)) {
        previousFiles = JSON.parse(fs.readFileSync(previousStateFile));
    } else {
        fs.writeFileSync(previousStateFile, JSON.stringify([])); // Crear archivo vacío inicialmente
    }

    let isChecking = false; // Bandera para evitar ejecuciones concurrentes
    let reconnectAttempts = 0; // Contador de intentos de reconexión

    async function detectChanges() {
        if (isChecking) return; // Evita ejecuciones concurrentes
        isChecking = true; // Marca el inicio de la verificación

        const ftpConnections = getFtpConnections();
        const connection = ftpConnections[equipment.mac_address];

        console.log(connection.client.closed);
        
        try {
            if (!connection) {
                console.error(`Conexión no encontrada para ${equipment.mac_address}`);
                return;
            }

            if (connection.client.closed) {
                // Intentar reconexión si la conexión está cerrada
                if (!connection.reconnecting) {
                    if (reconnectAttempts >= 5) { // Limitar los intentos de reconexión
                        console.error(`Máximo de intentos de reconexión alcanzado para ${equipment.name}`);
                        return;
                    }

                    console.log(
                        `Reconectando con el equipo ${equipment.name} (${equipment.mac_address})...`
                    );
                    updateFtpConnection(equipment.mac_address, { reconnecting: true });
                    reconnectAttempts++;

                    await reconnectFTP(equipment);

                    updateFtpConnection(equipment.mac_address, { reconnecting: false });
                    reconnectAttempts = 0; // Reiniciar contador después de una reconexión exitosa
                }
                return;
            }

            // Listar archivos actuales
            const currentFiles = await timeoutPromise(connection.client.list("/"), 5000);
            const addedFiles = currentFiles.map((file) => file.name).filter(
                (file) => !previousFiles.includes(file)
            );
            const removedFiles = previousFiles.filter(
                (file) => !currentFiles.map((file) => file.name).includes(file)
            );

            if (addedFiles.length > 0) {
                console.log(
                    `Archivos añadidos en el equipo ${equipment.name}:`,
                    addedFiles
                );
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
                        console.error(
                            `Error al descargar o procesar ${addedFile}:`,
                            error.message
                        );
                    }
                }
            }

            if (removedFiles.length > 0) {
                console.log(
                    `Archivos eliminados en ${equipment.name}:`,
                    removedFiles
                );
            }

            // Actualizar estado actual
            fs.writeFileSync(
                previousStateFile,
                JSON.stringify(currentFiles.map((file) => file.name))
            );
            previousFiles = currentFiles.map((file) => file.name);
        } catch (error) {
            if (["ECONNRESET", 421, 503, 530].includes(error.code)) {
                console.error(
                    `Error de conexión con ${equipment.name}, intentando reconectar...`, 
                    error.message
                );

                if (!connection.reconnecting) {
                    if (reconnectAttempts >= 5) { // Limitar los intentos de reconexión
                        console.error(`Máximo de intentos de reconexión alcanzado para ${equipment.name}`);
                        return;
                    }

                    updateFtpConnection(equipment.mac_address, { reconnecting: true });
                    reconnectAttempts++;

                    await reconnectFTP(equipment);

                    updateFtpConnection(equipment.mac_address, { reconnecting: false });
                    reconnectAttempts = 0; // Reiniciar contador después de una reconexión exitosa
                }
            } else {
                console.error("Error al detectar cambios en el directorio:", error.message);
            }
        } finally {
            isChecking = false; // Liberar bandera al finalizar
            setTimeout(detectChanges, 1000); // Continuar monitoreo
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
