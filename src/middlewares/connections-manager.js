const { connectFTP } = require("../lib/ftp-connection");
const { connectTCP } = require("../lib/tcp-connection");

function connectToFtp(equipments) {
  const devicesRequireFTPConn = equipments.filter(
    (equipment) => equipment.require_ftp_conn
  );

  devicesRequireFTPConn.forEach((device) => {
    if (!ftpConnections[device.mac_address]) {
      connectFTP(device);
    }
  });
}

function connectTcpServers(equipments) {
  const devicesRequireFTPConn = equipments.filter(
    (equipment) => equipment.is_tpc_server
  );

  devicesRequireFTPConn.forEach((device) => {
    if (!tcpConnections[device.mac_address]) {
      connectTCP(device);
    }
  });
}

module.exports = {
  connectToFtp,
  connectTcpServers,
};
