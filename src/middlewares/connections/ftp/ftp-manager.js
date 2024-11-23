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

    // Función para detectar cambios en el directorio
    async function detectChanges() {

        const ftpConnections = getFtpConnections();
        const connection = ftpConnections[equipment.mac_address];

        if (isChecking) return; // Evita ejecuciones concurrentes
        isChecking = true; // Marca el inicio de la verificación

        try {
            if (!connection.client.closed) {
                {
                    const currentFiles = (await connection.client.list("/")).map(
                        (file) => file.name
                    );
                    const addedFiles = currentFiles.filter(
                        (file) => !previousFiles.includes(file)
                    );
                    const removedFiles = previousFiles.filter(
                        (file) => !currentFiles.includes(file)
                    );

                    // Procesa archivos añadidos y eliminados
                    if (addedFiles.length > 0) {
                        console.log(`Archivos añadidos en el equipo ${equipment.name} con host en ${equipment.ip_address}:${equipment.port} `, addedFiles);
                        for (const addedFile of addedFiles) {
                            try {
                                const localPathToDownload = path.join(
                                    FILE_UPLOADS_DIR,
                                    addedFile
                                );

                                const remotePathToDownload = path.join(addedFile);

                                await connection.client.downloadTo(
                                    localPathToDownload,
                                    remotePathToDownload
                                );

                                const message = await readFile(localPathToDownload);
                                processData(equipment, message);

                                console.log("Mensaje procesado con éxito");
                            } catch (error) {
                                console.log(`Error al descargar ${addedFile}:`, error.message);
                            }
                        }
                    }
                    if (removedFiles.length > 0) {
                        console.log(
                            `Archivos eliminados en ${equipment.id}:`,
                            removedFiles
                        );
                    }

                    // Actualiza el estado actual
                    fs.writeFileSync(previousStateFile, JSON.stringify(currentFiles));
                    previousFiles = currentFiles; // Actualiza el estado en memoria
                }
            } else if (!connection.reconnecting) {
                console.log(`Reconectando con el equipo ${equipment.name} con host ${equipment.ip_address}:${equipment.port}...`);
                updateFtpConnection(equipment.mac_address, { reconnecting: true })  // Marca reconexión en proceso

                await reconnectFTP(equipment);
                updateFtpConnection(equipment.mac_address, { reconnecting: false }) // Reconexión terminada
            }
        } catch (error) {
            if (
                error.code === "ECONNRESET" ||
                error.code === 421 ||
                error.code === 503 ||
                error.code === 530
            ) {
                console.error(
                    `Error de conexión, intentando reconectar con el equipo ${equipment.name} con host ${equipment.ip_address}:${equipment.port}...`
                );

                if (!connection.reconnecting) {
                    updateFtpConnection(equipment.mac_address, { reconnecting: true })  // Marca reconexión en proceso
                    await reconnectFTP(equipment);
                    updateFtpConnection(equipment.mac_address, { reconnecting: false }) // Reconexión terminada
                }
            } else {
                console.error(`Error al detectar cambios en el directorio:`, error);
            }
        } finally {
            isChecking = false; // Marca el final de la verificación
        }

        // Reinicia el intervalo si la conexión es estable
        if (!connection.reconnecting) {
            setTimeout(() => detectChanges(equipment), 1000);
        }
    }
    // Ejecutar la primera detección
    detectChanges();
}

module.exports = { startMonitoringDirectory }