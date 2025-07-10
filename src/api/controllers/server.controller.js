const { NetworkInterface } = require("../../services/NetworkInterface")
//const { Server } = require("../../services/server")

class ServerController {
    static getServerInformation(req, res) {

        const data = Server.getServerData()
        return res.status(200).json({
            status: 200, data
        })
    }

    static getNetworkInterfaces(req, res) {
        const data = NetworkInterface.getNetworkInterfaces()

        if (data.length === 0) {
            return res.status(404).json({
                status: 404,
                message: "Not exists network interfaces"
            })
        }

        return res.status(200).json({
            status: 200, data
        })
    }
}

module.exports = { ServerController }