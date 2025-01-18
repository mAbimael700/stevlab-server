const { getEquipmetEmitter } = require("./equipment-events");
const { connectFTP, closeFTP } = require("../connections/ftp/ftp-connection");
const { connectTCP, closeTCP } = require("../connections/tcp-ip/tcp-helpers");
const { formatMacAddressWithSeparators } = require("../../utils/formatMacAddressWithSeparators");
const { createSerialConnection } = require("../connections/serial/serial-connection");
const { closeSerialConn } = require("../connections/serial/serial-helpers");


const equipmentEmitter = getEquipmetEmitter()
// Manejar equipos agregados

equipmentEmitter.on("deviceAdded", async (newEquipment) => {
  console.log(
    `Nuevo equipo detectado: ${newEquipment.name}`
  );

  if (newEquipment.require_ftp_conn) {
    await connectFTP(newEquipment);
  }

  if (newEquipment.require_tcp_conn) {
    await connectTCP(newEquipment);
  }

  if (newEquipment.require_serial_conn) {
    createSerialConnection(newEquipment)
  }
});

// Manejar equipos eliminados
equipmentEmitter.on("deviceRemoved", async (oldEquipment) => {
  console.log(`Equipo eliminado: ${oldEquipment.name}`);

  if (oldEquipment.require_ftp_conn) {
    await closeFTP(oldEquipment.mac_address);
  }

  if (oldEquipment.require_tcp_conn) {
    closeTCP(oldEquipment);
  }

  if (oldEquipment.require_serial_conn) {
    closeSerialConn(oldEquipment)
  }
});

// Manejar equipos modificados
equipmentEmitter.on("deviceModified", async (oldEquipment, newEquipment) => {
  console.log(
    `Equipo modificado: ${oldEquipment.id} -> ${newEquipment.id} (${formatMacAddressWithSeparators(
      newEquipment.id_device
    )})`
  );

  if (newEquipment.require_ftp_conn) {
    await closeFTP(oldEquipment.mac_address);
    await connectFTP(newEquipment);
  }

  if (newEquipment.require_tcp_conn) {
    closeTCP(oldEquipment.mac_address);
    await connectTCP(newEquipment);
  }


});
