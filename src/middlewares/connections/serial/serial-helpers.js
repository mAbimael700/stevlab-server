const { SerialPort } = require("serialport");
const { getSerialConnections } = require("./serial-manager");


async function getAvailableCOMPorts() {
  try {
    const ports = await SerialPort.list(); // Lista los puertos disponibles
    const comPorts = ports.map((port) => ({
      path: port.path,
      manufacturer: port.manufacturer || "Unknown",
      serialNumber: port.serialNumber || "N/A",
    }));
    return comPorts;
  } catch (error) {
    console.error("Error al obtener los puertos COM:", error);
    throw error;
  }
}

/**
 * Verifica la conexión con un dispositivo serial.
 * @param {string} id_device - El identificador del dispositivo serial.
 * @returns {Promise<boolean>} - Devuelve `true` si hay conexión, `false` si no la hay.
 */
async function testSerialDevice(id_device) {
  const port = getSerialConnections().get(id_device);

  if (!port) {
    throw new Error("No existe un cliente serial con el equipo proporcionado");
  }

  const hadConnection = port.isOpen; // Verifica si el puerto ya estaba abierto

  // Función para manejar errores del puerto
  const handlePortError = (error) => {
    console.error("Error en el puerto serial:", error.message);
    throw new Error("Error en el puerto serial: " + error.message);
  };

  // Escuchar eventos de error del puerto
  port.on("error", handlePortError);

  try {
    // Si el puerto no está abierto, intenta abrirlo
    if (!hadConnection) {
      try {
        await new Promise((resolve, reject) => {
          port.open((err) => {
            if (err) {
              reject(err);
            } else {
              //console.info("El puerto se ha abierto correctamente.");
              resolve();
            }
          });
        });
      } catch (error) {
        console.warn("No se pudo abrir el puerto: ", error.message);
        return false;
      }
    }

    // Intenta enviar un comando de prueba para verificar la conexión
    await new Promise((resolve, reject) => {
      port.write("Comando de prueba", (err) => {
        if (err) {
          reject(err);
        } else {
          console.info(
            "El comando se ha enviado correctamente, el equipo está conectado."
          );
          resolve();
        }
      });
    });

    // Si el puerto no estaba abierto inicialmente, ciérralo después de la prueba
    if (!hadConnection) {
      await new Promise((resolve, reject) => {
        port.close((err) => {
          if (err) {
            reject(err);
          } else {
            //console.info("El puerto se ha cerrado correctamente.");
            resolve();
          }
        });
      });
    }

    return true; // Retorna true si la conexión fue exitosa
  } catch (error) {
    console.warn("Hubo un error al comunicarse con el puerto: ", error.message);

    // Si el puerto no estaba abierto inicialmente, ciérralo en caso de error
    if (!hadConnection && port.isOpen) {
      await new Promise((resolve, reject) => {
        port.close((err) => {
          if (err) {
            reject(err);
          } else {
            //console.info("El puerto se ha cerrado debido a un error.");
            resolve();
          }
        });
      });
    }

    return false; // Retorna false si hubo un error
  } finally {
    // Limpiar el listener de errores para evitar fugas de memoria
    port.removeListener("error", handlePortError);
  }
}
module.exports = {
  testSerialDevice,
  getAvailableCOMPorts,
};
