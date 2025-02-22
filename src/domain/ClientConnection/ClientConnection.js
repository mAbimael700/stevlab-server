const { TCPServer } = require("../../lib/connections/TCP/TcpServer");

class ClientConnection {

    /**
     * 
     */
    constructor(equipment) {
        this.equipment = equipment

    }

    /**
     * 
     * @param {string} type  
     * @returns 
     */
    create(type) {

        switch (type) {
            case "TCP server":
                return new TCPServer(this.equipment).create()

            case "RS-232":
                return new RS232Client(this.equipment)

            case "FTP server":
                return new FTPServer(this.equipment)

            default:
                console.warn("El tipo de conexión no es válida en el método create, métodos esperados:",
                    ["TCP server", "RS-232", "FTP server"])
                break;
        }
    }
}

module.exports = {
    ClientConnection
}