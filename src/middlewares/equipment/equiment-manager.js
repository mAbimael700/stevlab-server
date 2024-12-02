const fs = require("node:fs");
const { DEVICES_DIR, CONFIG_DIR } = require("../../constants/CONFIG_DIR");
const { getEquipmetEmitter } = require("./equipment-events");
const { setEquipments, getEquipments } = require("./equipment-helpers");

let previousEquipments = [];

// Función para leer equipos desde el archivo
function readDevicesFromFile() {
  try {
    if (!fs.existsSync(CONFIG_DIR)) {
      console.warn(`La carpeta de configuración no existe: ${CONFIG_DIR}`);
      fs.mkdirSync(CONFIG_DIR, { recursive: true });
    }

    if (!fs.existsSync(DEVICES_DIR)) {
      console.warn(
        `El archivo ${DEVICES_DIR} no existe. Creando archivo nuevo...`
      );
      fs.writeFileSync(DEVICES_DIR, JSON.stringify({ devices: [] }, null, 2));
    }
    const data = fs.readFileSync(DEVICES_DIR, "utf8");
    const devices = JSON.parse(data)?.devices ?? [];
    setEquipments(devices); // Actualiza la lista en equipment-helpers
    console.log("Equipos cargados:", getEquipments());
  } catch (error) {
    console.error("Error al leer el archivo de dispositivos:", error.message);
  }
}

// Función para detectar cambios y emitir eventos
function detectChangesAndEmitEvents() {
  const oldEquipments = [...previousEquipments];

  const equipmentsOnServer = getEquipments();
  const equipmentEmitter = getEquipmetEmitter()

  equipmentsOnServer.forEach((newEquipment) => {
    const oldEquipment = oldEquipments.find(
      (equip) => equip.mac_address === newEquipment.mac_address
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
      console.log(`El archivo ${DEVICES_DIR} ha cambiado. Procesando...`);
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
  writeAndRefreshEquipments([...equipmentsOnServer, equipment]);
}

function deleteEquipmentOnServer(mac_address) {
  const equipmentsOnServer = getEquipments();
  const updatedEquipments = equipmentsOnServer.filter(
    (equipment) => equipment.mac_address !== mac_address
  );
  writeAndRefreshEquipments(updatedEquipments);
}

module.exports = {
  initializeEquipmentManager,
  writeEquipmentOnServer,
  deleteEquipmentOnServer,
  getEquipments,
};
