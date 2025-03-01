class FTPMonitor {
    constructor(connection) {
        this.isChecking = false;
        this.reconnectAttempts = 0;
        this.connection = connection
        this.previousFiles = null
    }

    async monitorate(equipment) {
        this.previousFiles = loadPreviousState();
        this.detectChanges(); // Inicia la detección inicial
    }


    async detectChanges() {
        if (this.isChecking) return;
        this.isChecking = true;


        try {
            if (connection.closed) {
                connection = await handleReconnection(equipment, reconnectAttempts++);
                if (!connection) return;
            }

            const currentFiles = (
                await timeoutPromise(connection.client.list("/"), 5000)
            ).map((file) => file);

            const addedFiles = this.getAddedOrUpdatedFiles(currentFiles);
            const removedFiles = this.getRemovedFiles(currentFiles);

            if (addedFiles.length > 0) {
                console.log(`Archivos añadidos en ${equipment.name}:`, addedFiles);
                await this.processNewFiles(equipment, addedFiles);
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


    getAddedOrUpdatedFiles(currentFiles) {
        return currentFiles.filter((currentFile) => {
            // Buscar un archivo con el mismo nombre en los archivos anteriores
            const previousFile = this.previousFiles.find(
                (prevFile) => prevFile.name === currentFile.name
            );
            // Si no existe en los archivos anteriores o si la fecha de modificación es distinta
            return !previousFile || previousFile.rawModifiedAt !== currentFile.rawModifiedAt;
        });
    }

    getRemovedFiles(currentFiles) {
        return this.previousFiles.filter(
            (prevFile) => !currentFiles.some(
                (currentFile) => currentFile.name === prevFile.name
            )
        );
    }

    // Procesamiento de archivos
    async processNewFiles(equipment, addedFiles) {
        for (const addedFile of addedFiles) {
            try {
                const localPathToDownload = path.join(FILE_UPLOADS_DIR, addedFile.name);
                await timeoutPromise(
                    this.connection.client
                        .downloadTo(localPathToDownload, `/${addedFile.name}`),
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

    // Manejo de reconexión
    async handleReconnection(
        equipment,
        reconnectAttempts,
        maxRetries = 8
    ) {
        if (reconnectAttempts >= maxRetries) {
            console.error(
                `Máximo de intentos de reconexión alcanzado para ${equipment.name}`
            );
            return null;
        }

        console.log(
            `Intentando reconectar con ${equipment.name
            } (${formatMacAddressWithSeparators(equipment.mac_address)})...`
        );
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


}