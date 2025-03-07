const { getEquipmetEmitter } = require("../../middlewares/equipment/equipment-events");
const { connectFTP, closeFTP } = require("../../middlewares/connections/ftp/ftp-connection");
const { connectTCP, closeTCP } = require("../../middlewares/connections/tcp-ip/tcp-helpers");
const { formatMacAddressWithSeparators } = require("../../utils/formatMacAddressWithSeparators");
const { closeSerialConn, addSerialConn } = require("../../middlewares/connections/serial/serial-manager");

const equipmentEmitter = getEquipmetEmitter()
// Manejar equipos agregados

equipmentEmitter.on("deviceAdded", async (newEquipment) => {
  console.log(
    `Nuevo equipo detectado --> ${newEquipment.name}`
  );

  
  if (newEquipment.require_ftp_conn) {
    await connectFTP(newEquipment);
  }

  if (newEquipment.require_tcp_server_conn) {
    await connectTCP(newEquipment);
  }

  if (newEquipment.require_serial_conn) {
    addSerialConn(newEquipment)
  }
});

// Manejar equipos eliminados
equipmentEmitter.on("deviceRemoved", async (oldEquipment) => {
  console.log(`Equipo eliminado: ${oldEquipment.name}`);

  if (oldEquipment.require_ftp_conn) {
    await closeFTP(oldEquipment.mac_address);
  }

  if (oldEquipment.require_tcp_server_conn) {
    closeTCP(oldEquipment);
  }

  if (oldEquipment.require_serial_conn) {
    closeSerialConn(oldEquipment)
  }
});

// Manejar equipos modificados
equipmentEmitter.on("deviceModified", async (oldEquipment, newEquipment) => {
  console.log(
    `Equipo modificado: ${oldEquipment.name}`
  );

  if (newEquipment.require_ftp_conn) {
    await closeFTP(oldEquipment.mac_address);
    await connectFTP(newEquipment);
  }

  if (newEquipment.require_tcp_server_conn) {
    closeTCP(oldEquipment.id_device);
    await connectTCP(newEquipment);
  }


});
