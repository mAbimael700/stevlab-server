const fs = require("node:fs");

const {
  parseResultsData: parserFujifilmNx600,
} = require("../lib/parsers/HL7-type1/parser");
const {
  parseResultsData: parserControlab,
} = require("../lib/parsers/HL7-type4/parser");
const { DEVICES_DIR, CONFIG_DIR } = require("../constants/CONFIG_DIR");

let equipmentsOnServer = [];

// Función para cargar equipos desde el archivo
function loadEquipments() {
  try {
    // Verifica si la carpeta de configuración existe, si no, créala
    if (!fs.existsSync(CONFIG_DIR)) {
      console.error(
        `La carpeta de configuración no existe: ${CONFIG_DIR}. Creando la carpeta...`
      );
      fs.mkdirSync(CONFIG_DIR, { recursive: true }); // Crea la carpeta, incluyendo cualquier carpeta padre si es necesario
    }
    
    // Verifica si el archivo existe
    if (!fs.existsSync(DEVICES_DIR)) {
      console.error(
        `El archivo ${DEVICES_DIR} no existe. Creando un archivo nuevo...`
      );
      fs.writeFileSync(DEVICES_DIR, JSON.stringify({ devices: [] }, null, 2));
    }

    const data = fs.readFileSync(DEVICES_DIR).toString();
    const parsedData = JSON.parse(data);
    equipmentsOnServer = parsedData?.devices ?? [];
    console.log("Equipos cargados:", equipmentsOnServer);
  } catch (error) {
    // Manejo de errores
    console.error(
      "Error al leer o parsear el archivo de dispositivos:",
      error.message
    );
  }
}

// Inicializa la carga de equipos
loadEquipments();

// Observa cambios en el archivo de dispositivos
fs.watch(DEVICES_DIR, (eventType, filename) => {
  if (eventType === "change" || eventType === "rename") {
    console.log(`El archivo ${filename} ha cambiado. Actualizando equipos...`);
    loadEquipments(); // Recarga los equipos
  }
});

// Getter para acceder a equipmentsOnServer
function getEquipments() {
  return equipmentsOnServer;
}

// Función auxiliar para escribir en el archivo y actualizar la lista en memoria
function writeAndRefreshEquipments(newEquipments) {
  try {
    fs.writeFileSync(
      DEVICES_DIR,
      JSON.stringify({ devices: newEquipments }, null, 2)
    );
    equipmentsOnServer = newEquipments; // Actualiza la lista en memoria
  } catch (error) {
    console.error("Error al escribir en el archivo de dispositivos:", error);
  }
}

function writeEquipmentOnServer(equiment) {
  writeAndRefreshEquipments([...equipmentsOnServer, equiment]);
}

function deleteEquipmentOnServer(mac_address) {
  const updatedEquipments = equipmentsOnServer.filter(
    (equipment) => equipment.mac_address !== mac_address
  );
  writeAndRefreshEquipments(updatedEquipments);
}

const equipmentsParsers = {
  FUJIFILM_DRICHEM_NX600: parserFujifilmNx600,
  CONTROLAB: parserControlab,
};

module.exports = {
  equipmentsOnServer,
  equipmentsParsers,
  loadEquipments,
  writeEquipmentOnServer,
  deleteEquipmentOnServer,
  getEquipments,
};
