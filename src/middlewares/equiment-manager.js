const fs = require("node:fs");


const { DEVICES_DIR, CONFIG_DIR } = require("../constants/CONFIG_DIR");

const { closeFTP, connectFTP } = require("../lib/ftp-devices");
const {
  formatMacAddressWithSeparators,
} = require("../utils/formatMacAddressWithSeparators");

let equipmentsOnServer = [];
let previousEquipments = []; // Equipos previos (historial)

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

// Usamos fs.watchFile para observar cambios en el archivo con un intervalo
fs.watchFile(DEVICES_DIR, { interval: 500 }, (curr, prev) => {
  if (curr.mtime !== prev.mtime) {
    // Verifica si la última modificación cambió
    console.log(
      `El archivo ${DEVICES_DIR} ha cambiado. Actualizando equipos...`
    );

    // Cargar la nueva lista de equipos
    const oldEquipments = [...previousEquipments]; // Usa la copia del estado anterior

    loadEquipments(); // Recargar equipos actualizados
    previousEquipments = [...equipmentsOnServer];

    // Detectar equipos eliminados
    oldEquipments.forEach(async (oldEquipment) => {
      const deletedDevice = !equipmentsOnServer.find(
        (newEquipment) => newEquipment.mac_address === oldEquipment.mac_address
      );

      if (deletedDevice) {
        console.log(`Equipo ${oldEquipment.id} ha sido eliminado.`);
        await closeFTP(oldEquipment.mac_address); // Cierra la conexión FTP
      }
    });

    // Detectar equipos agregados o modificados
    equipmentsOnServer.forEach(async (newEquipment) => {
      const oldEquipment = oldEquipments.find(
        (equip) => equip.mac_address === newEquipment.mac_address
      );

      if (!oldEquipment) {
        console.log(
          `Nuevo equipo detectado: ${
            newEquipment.id
          } con dirección MAC ${formatMacAddressWithSeparators(
            newEquipment.mac_address
          )} ha sido agregado`
        );

        if (newEquipment.id === "CM200" || newEquipment.id === "A15") {
          await connectFTP(newEquipment); // Inicia una nueva conexión FTP
        }
      } else if (
        oldEquipment.ip_address !== newEquipment.ip_address ||
        oldEquipment.port !== newEquipment.port
      ) {
        console.log(`Equipo modificado: ${newEquipment.id}`);
        await closeFTP(oldEquipment.mac_address); // Cierra la conexión antigua
        await connectFTP(newEquipment); // Establece la nueva conexión FTP
      }
    });

    // Actualiza la variable de estado previo después de procesar los cambios
    previousEquipments = [...equipmentsOnServer]; // Guarda la nueva lista de equipos como estado previo
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
    // previousEquipments = [...newEquipments]; // Actualiza el estado previo cuando se escribe en el archivo
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



module.exports = {
  equipmentsOnServer,
  loadEquipments,
  writeEquipmentOnServer,
  deleteEquipmentOnServer,
  getEquipments,
};
