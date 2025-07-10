const EventEmitter = require("node:events");

class EquipmentEmitter extends EventEmitter { }

const equipmentEmitter = new EquipmentEmitter();

function getEquipmetEmitter() {
  return equipmentEmitter
}


module.exports = { getEquipmetEmitter };
