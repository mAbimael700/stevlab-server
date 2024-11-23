const EventEmitter = require("node:events");
const { connectFTP, closeFTP } = require("../lib/ftp-connection");
const { connectTCP, closeTCP } = require("../lib/tcp-connection");
const { formatMacAddressWithSeparators } = require("../utils/formatMacAddressWithSeparators");

class EquipmentEmitter extends EventEmitter { }

const equipmentEmitter = new EquipmentEmitter();

function getEquipmetEmitter() {
  return equipmentEmitter
}


module.exports = { getEquipmetEmitter };
