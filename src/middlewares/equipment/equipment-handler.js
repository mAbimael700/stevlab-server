const { getEquipmetEmitter } = require("./equipment-events");
const { connectFTP, closeFTP } = require("../connections/ftp/ftp-connection");
const { connectTCP, closeTCP } = require("../connections/tcp-ip/tcp-connection");
const { formatMacAddressWithSeparators } = require("../../utils/formatMacAddressWithSeparators");


const equipmentEmitter = getEquipmetEmitter()
// Manejar equipos agregados

equipmentEmitter.on("deviceAdded", async (newEquipment) => {
  console.log(
    `Nuevo equipo detectado: ${newEquipment.id} (${formatMacAddressWithSeparators(
      newEquipment.mac_address
    )})`
  );

  if (newEquipment.require_ftp_conn) {
    await connectFTP(newEquipment);
  }

  if (newEquipment.is_tpc_server) {
    await connectTCP(newEquipment);
  }
});

// Manejar equipos eliminados
equipmentEmitter.on("deviceRemoved", async (oldEquipment) => {
  console.log(`Equipo eliminado: ${oldEquipment.id}`);

  if (oldEquipment.require_ftp_conn) {
    await closeFTP(oldEquipment.mac_address);
  }

  if (oldEquipment.is_tpc_server) {
    closeTCP(oldEquipment.mac_address);
  }
});

// Manejar equipos modificados
equipmentEmitter.on("deviceModified", async (oldEquipment, newEquipment) => {
  console.log(
    `Equipo modificado: ${oldEquipment.id} -> ${newEquipment.id} (${formatMacAddressWithSeparators(
      newEquipment.mac_address
    )})`
  );

  if (newEquipment.require_ftp_conn) {
    await closeFTP(oldEquipment.mac_address);
    await connectFTP(newEquipment);
  }

  if (newEquipment.is_tpc_server) {
    closeTCP(oldEquipment.mac_address);
    await connectTCP(newEquipment);
  }
});
