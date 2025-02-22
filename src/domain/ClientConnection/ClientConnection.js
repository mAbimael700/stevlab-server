const { FTPClient } = require("../../lib/connections/FTP/FtpClient");
const { TCPClient } = require("../../lib/connections/TCP/TcpClient");

class ClientConnection {

    /**
     * 
     */
    constructor(equipment, type) {
        this.equipment = equipment
        this.type = type
        this.client = null
        this.connecting = null
        this.closed = null
    }

    /**
     * 
     * @returns {Promise<void>}
     */
    async build() {

        switch (this.type) {
            case "TCP server":
                const tcpClient = new TCPClient(this.equipment)
                const tcpClientbuilder = await tcpClient.build()
                this.connecting = tcpClientbuilder.connecting
                this.closed = tcpClientbuilder.closed
                break

            case "TCP client":
                console.info("Realiza la conexión del equipo desde el equipo de laboratorio.")
                break;

            case "RS-232":
                return new RS232Client(this.equipment)

            case "FTP server":
                const ftpClient = new FTPClient(this.equipment)
                const ftpBuilder = await ftpClient.build()
                this.client = ftpBuilder
                this.closed = ftpBuilder.closed
                this.connecting = false
                break;

            default:
                console.warn("El tipo de conexión no es válida en el método create, métodos esperados:",
                    ["TCP server", "RS-232", "FTP server"])
                break;
        }
    }


    async close() {
        switch (this.type) {
            case value:

                break;

            default:
                break;
        }
    }

    setClientConnection(client) {


        switch (this.type) {
            case "TCP client":
                this.client = client
                this.connecting = client.connecting
                this.closed = client.closed
                break;

            default:
                break;
        }
    }
}

module.exports = {
    ClientConnection
}