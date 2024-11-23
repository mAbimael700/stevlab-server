const { addFtpConnection, getFtpConnections, deleteFtpConnection } = require("./ftp-helpers");
const { startMonitoringDirectory } = require("./ftp-manager");

async function connectFTP(equipment) {
    await addFtpConnection(equipment);
    await startMonitoringDirectory(equipment);
}

// Función para cerrar la conexión FTP
async function closeFTP(macAddress) {
    const ftpConnections = getFtpConnections()
    const { client } = ftpConnections[macAddress];

    if (client) {
        clearInterval(client.monitoringInterval); // Detener el intervalo de monitoreo
        await client.close();
        console.log(`Conexión FTP cerrada para ${macAddress}`);
        deleteFtpConnection(macAddress)
    } else {
        console.log(`No se encontró una conexión FTP activa para ${macAddress}`);
    }
}

module.exports = {
    connectFTP, closeFTP
}