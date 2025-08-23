const {Socket} = require("node:net");
const TcpClient = require("@/infra/connection/tcp/client/TcpClient");

class TcpOutBoundClient extends TcpClient {
    /**
     * @param {EquipmentDto} equipment
     * @param {TcpClientFactory} clientFactory
     */
    constructor(equipment, clientFactory) {
        const socket = new Socket();
        super(socket);
        this.equipment = equipment;
        this.clientFactory = clientFactory;

        // Crear dependencias usando el factory
        const handlers = this.clientFactory.create(socket, equipment);
        this.dataHandler = handlers.dataHandler;
        this.eventsHandler = handlers.eventsHandler;
        this.socketListener = handlers.socketListener;

    }

    async connect() {
        try {
            const {port, ipAddress: host} = this.equipment.equipmentConfiguration;

            await new Promise((resolve, reject) => {
                const onConnect = () => {
                    cleanUp();
                    resolve();
                };

                const onError = (err) => {
                    cleanUp();
                    reject(err);
                };

                const cleanUp = () => {
                    this.client.connecting = false;
                    this.client.off("connect", onConnect);
                    this.client.off("error", onError);
                };

                // Attach the listeners
                this.client.once("connect", onConnect);
                this.client.once("error", onError);

                this.client.connect({host, port});
            });
        } catch (error) {
            throw new Error(
                `Hubo un error al conectarse con el equipo: ${error.message}`
            );
        }
    }
}

module.exports = TcpOutBoundClient;