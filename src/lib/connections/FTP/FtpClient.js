const ftp = require("basic-ftp")

class FTPClient {
    constructor(equipment) {
        this.equipment = equipment

        this.configuration = {
            host: this.equipment.getIpAddress(),
            port: this.equipment.getPort(),
            user: "stevlabserver",
            password: "annon",
            secure: true, // TLS explícito
            sessionReuse: false,
            passive: true, // Habilita el modo pasivo
            secureOptions: {
                rejectUnauthorized: false,
                maxVersion: "TLSv1.2",
            }, // Permitir certificados autofirmados
        }
    }

    /**
     * 
     * @param {number} retryCount 
     * @returns {Promise<ftp.Client | null>}
     */
    async build(retryCount = 0) {

        // Creamos un objeto de la clase ftp
        const client = new ftp.Client();

        try {
            // Intentamos acceder al servidor FTP
            await client.access(this.configuration)

            const message =
                `Conexión FTP establecida con el equipo ${this.equipment.name} en el host ${this.equipment.configuration.ipAddress}:${equipment.configuration.port}`;

            //emitOpenedDevice(equipment, message);
            console.info(message);


            // Verificar el estado de la conexión luego de acceder
            if (client.closed) {
                console.warn("La conexión se cerró inesperadamente");
            } else {
                console.info("Conexión abierta y activa");
               //emitOpenedDevice(equipment, message);
            }

            return client

        } catch (error) {
            console.error(
                `Error al conectar FTP con el equipo ${equipment.name} en el host ${equipment.ip_address}:${equipment.port}`,
                error.message
            );

            /* emitClosedDevice(
                equipment,
                true,
                `Error al conectar FTP con el equipo ${equipment.name} en el host ${equipment.ip_address}:${equipment.port}: ${error.message}`
            ); */

            if (retryCount < 5) {// Si hay un error y no se ha alcanzado el máximo de intentos, realizar reconexión con retardo
                const delay = INITIAL_DELAY * 2 ** retryCount; // Incrementa el tiempo de espera exponencialmente
                console.log(`Reintentando conexión en ${delay / 1000} segundos...`);

                // Esperar el tiempo de retardo antes de reconectar
                await new Promise((resolve) => setTimeout(resolve, delay));
                return this.build(retryCount + 1); // Intento de reconexión
            }
        }
    }
}

module.exports = { FTPClient }