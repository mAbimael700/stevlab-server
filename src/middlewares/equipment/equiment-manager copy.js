const fs = require("node:fs");
const { DEVICES_DIR } = require("../../constants/CONFIG_DIR");
const { getEquipmetEmitter } = require("./equipment-events");
const { setEquipments, getEquipments } = require("./equipment-helper copy");
const crypto = require("node:crypto");
const { validateDeviceConfiguration } = require("../../schemas/device-schema");


const equipmentEmitter = getEquipmetEmitter();
let previousEquipments = [];

// Función para leer equipos desde el archivo
function readDevicesFromFile() {
  try {

    //Pendiente: Validar si los directorios de config y el archivo de devices existen
    const data = fs.readFileSync(DEVICES_DIR, "utf8");
    const devices = JSON.parse(data)?.devices;
    const result = validateDeviceConfiguration(devices)

    if (result.success) {
      setEquipments(result.data); // Actualiza la lista en equipment-helpers
    }


  } catch (error) {
    console.error("Error al leer el archivo de dispositivos:", error.message);
  }
}

// Función para detectar cambios y emitir eventos
function detectChangesAndEmitEvents() {
  const oldEquipments = [...previousEquipments];

  const equipmentsOnServer = getEquipments();


  equipmentsOnServer.forEach((newEquipment) => {
    const oldEquipment = oldEquipments.find(
      (equip) => equip.id_device === newEquipment.id_device
    );

    if (!oldEquipment) {
      equipmentEmitter.emit("deviceAdded", newEquipment);
    } else if (
      oldEquipment.ip_address !== newEquipment.ip_address ||
      oldEquipment.port !== newEquipment.port
    ) {
      equipmentEmitter.emit("deviceModified", oldEquipment, newEquipment);
    }
  });

  oldEquipments.forEach((oldEquipment) => {
    const deletedDevice = !equipmentsOnServer.find(
      (newEquipment) => newEquipment.mac_address === oldEquipment.mac_address
    );
    if (deletedDevice) {
      equipmentEmitter.emit("deviceRemoved", oldEquipment);
    }
  });

  previousEquipments = [...equipmentsOnServer];
}

// Inicialización: lectura inicial de equipos y detección de cambios
function initializeEquipmentManager() {
  readDevicesFromFile();
  detectChangesAndEmitEvents();

  fs.watchFile(DEVICES_DIR, { interval: 500 }, (curr, prev) => {
    if (curr.mtime !== prev.mtime) {
      console.log(
        `La configuraciones de los equipos han cambiado. Procesando...`
      );
      readDevicesFromFile();
      detectChangesAndEmitEvents();
    }
  });
}

// Función para escribir en el archivo y actualizar la memoria
function writeAndRefreshEquipments(newEquipments) {
  try {
    fs.writeFileSync(
      DEVICES_DIR,
      JSON.stringify({ devices: newEquipments }, null, 2)
    );

    setEquipments(newEquipments);
  } catch (error) {
    console.error(
      "Error al escribir en el archivo de dispositivos:",
      error.message
    );
  }
}

function writeEquipmentOnServer(equipment) {
  const equipmentsOnServer = getEquipments();
  const uniqueId = crypto.randomBytes(3).toString("hex");
  equipment.id_device = uniqueId;
  writeAndRefreshEquipments([...equipmentsOnServer, equipment]);
}

function deleteEquipmentOnServer(id_device) {
  const equipmentsOnServer = getEquipments();
  const updatedEquipments = equipmentsOnServer.filter(
    (equipment) => equipment.id_device !== id_device
  );
  writeAndRefreshEquipments(updatedEquipments);
}

module.exports = {
  initializeEquipmentManager,
  writeEquipmentOnServer,
  deleteEquipmentOnServer,
  getEquipments,
};
