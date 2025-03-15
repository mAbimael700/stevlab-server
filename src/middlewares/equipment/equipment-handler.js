const { getEquipmetEmitter } = require("./equipment-events");
const { connectFTP, closeFTP } = require("../connections/ftp/ftp-connection");
const { connectTCP, closeTCP } = require("../connections/tcp-ip/tcp-helpers");
const {
  closeSerialConn,
  addSerialConn,
} = require("../connections/serial/serial-manager");

const equipmentEmitter = getEquipmetEmitter();
// Manejar equipos agregados

equipmentEmitter.on("deviceAdded", async (newEquipment) => {
  console.log(`Nuevo equipo detectado --> ${newEquipment.name}`);

  try {
    if (newEquipment.require_ftp_conn) {
      await connectFTP(newEquipment);
    }

    if (newEquipment.require_tcp_server_conn) {
      await connectTCP(newEquipment);
    }

    if (newEquipment.require_serial_conn) {
      addSerialConn(newEquipment);
    }
  } catch (error) {
    console.error(error.message);
  }
});

// Manejar equipos eliminados
equipmentEmitter.on("deviceRemoved", async (oldEquipment) => {
  console.log(`Equipo eliminado: ${oldEquipment.name}`);

  try {
    if (oldEquipment.require_ftp_conn) {
      await closeFTP(oldEquipment.mac_address);
    }

    if (oldEquipment.require_tcp_server_conn) {
      closeTCP(oldEquipment);
    }

    if (oldEquipment.require_serial_conn) {
      closeSerialConn(oldEquipment);
    }
  } catch (error) {
    console.error(error.message);
  }
});

// Manejar equipos modificados
equipmentEmitter.on("deviceModified", async (oldEquipment, newEquipment) => {
  console.log(`Equipo modificado: ${oldEquipment.name}`);

  try {
    if (newEquipment.require_ftp_conn) {
      await closeFTP(oldEquipment);
      await connectFTP(newEquipment);
    }

    if (newEquipment.require_tcp_server_conn) {
      closeTCP(oldEquipment);
      await connectTCP(newEquipment);
    }
  } catch (error) {
    console.error(error.message);
  }
});
