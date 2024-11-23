const ftp = require("basic-ftp"); // Importa el cliente FTP
const fs = require("node:fs");
const path = require("node:path");
const { STATES, FILE_UPLOADS_DIR } = require("../constants/CONFIG_DIR");
const { readFile } = require("./read-file");
const { processData } = require("./process-data");

// Configuración del límite y la frecuencia de reconexión
const MAX_RETRIES = 5;
const INITIAL_DELAY = 1000; // 1 segundo

// Variable para almacenar las conexiones FTP activas
let ftpConnections = {};

// 
function getFtpConnections() {
  return ftpConnections
}

function setFtpConnections(connections) {
  return ftpConnections = connections
}

function addFtpConnection(macAddress, client) {
  // Validar que macAddress y client sean válidos
  if (!macAddress || !client) {
    throw new Error("macAddress y client son requeridos");
  }

  // Obtener las conexiones actuales
  const connections = getFtpConnections();

  // Agregar o actualizar la conexión
  connections[macAddress] = {
    client,
    reconnecting: false,
  };

  // Actualizar la variable global
  setFtpConnections(connections);
}

function deleteFtpConnection() {

}


async function createFtpClient(equipment, retryCount = 0) {
  const ftpConnections = getFtpConnections();

  // Si ya existe una conexión, ciérrala antes de intentar una nueva conexión
  const existConnection = ftpConnections[equipment.mac_address];
  if (existConnection && !existConnection.client.closed) {
    await closeFTP(equipment.mac_address);
  }

  // Creamos un objeto de la clase ftp
  const client = new ftp.Client();

  // Agregamos el estado de reconexión específico al equipo
  addFtpConnection(equipment.mac_address, client)

  try {
    // Accedemos al servidor FTP por medio de los datos predefinidos
    client.access({
      host: equipment.ip_address,
      port: equipment.port,
      user: "stevlabserver",
      password: "annon",
      secure: true, // TLS explícito
      secureOptions: { rejectUnauthorized: false }, // Permitir certificados autofirmados
    })

    console.log(`Conexión FTP establecida con el equipo ${equipment.name} (${equipment.mac_address}) con dirección IP ${equipment.ip_address}:${equipment.port}`);


  } catch (error) {
    console.error(`Error al conectar FTP con el equipo ${equipment.name}: (${equipment.mac_address}) con dirección IP ${equipment.ip_address}:${equipment.port} `, error.message);

    // Si hay un error y no se ha alcanzado el máximo de intentos, realizar reconexión con retardo
    if (retryCount < MAX_RETRIES) {
      const delay = INITIAL_DELAY * 2 ** retryCount; // Incrementa el tiempo de espera exponencialmente
      console.log(`Reintentando conexión en ${delay / 1000} segundos...`);

      // Esperar el tiempo de retardo antes de reconectar
      await new Promise((resolve) => setTimeout(resolve, delay));
      return createFtpClient(equipment, retryCount + 1); // Intento de reconexión
    } else {
      console.error(
        `Máximo de intentos de reconexión alcanzado para el equipo ${equipment.name} (${equipment.mac_address}) con dirección IP ${equipment.ip_address}:${equipment.port}`
      );
    }
  }

}


// Función para iniciar una conexión FTP
async function connectFTP(equipment, retryCount = 0) {
  // Si ya existe una conexión, ciérrala antes de intentar una nueva conexión
  const currentConnection = ftpConnections[equipment.mac_address];
  if (currentConnection && !currentConnection.client.closed) {
    await closeFTP(equipment.mac_address);
  }

  const client = new ftp.Client();
  //client.ftp.verbose = true; // Para ver los logs

  // Agregamos el estado de reconexión específico al equipo
  ftpConnections[equipment.mac_address] = {
    client,
    reconnecting: false,
  };

  try {
    await client.access({
      host: equipment.ip_address,
      port: equipment.port,
      user: "stevlabserver", // reemplaza con tu usuario
      password: "annon", // reemplaza con tu contraseña
      secure: true, // TLS explícito
      secureOptions: { rejectUnauthorized: false }, // Permitir certificados autofirmados
      passive: true, // o false, según el ajuste del servidor
    });
    console.log(`Conexión FTP establecida con ${equipment.id}`);

    // Iniciar el monitoreo del directorio remoto
    startMonitoringDirectory(equipment);
    ftpConnections[equipment.mac_address].reconnecting = false;
    return client;
  } catch (error) {
    console.error(`Error al conectar FTP con ${equipment.id}: `, error.message);

    // Si hay un error y no se ha alcanzado el máximo de intentos, realizar reconexión con retardo
    if (retryCount < MAX_RETRIES) {
      const delay = INITIAL_DELAY * 2 ** retryCount; // Incrementa el tiempo de espera exponencialmente
      console.log(`Reintentando conexión en ${delay / 1000} segundos...`);

      // Esperar el tiempo de retardo antes de reconectar
      await new Promise((resolve) => setTimeout(resolve, delay));
      return connectFTP(equipment, retryCount + 1); // Intento de reconexión
    } else {
      console.error(
        `Máximo de intentos de reconexión alcanzado para ${equipment.id}`
      );
    }
  }
}

// Función para monitorear cambios en el directorio remoto
async function startMonitoringDirectory(equipment) {
  const previousStateFile = path.join(
    STATES,
    `${equipment.mac_address}-previous-state.json`
  );

  // Cargar el estado anterior o inicializar uno vacío si no existe
  let previousFiles = [];
  if (fs.existsSync(previousStateFile)) {
    previousFiles = JSON.parse(fs.readFileSync(previousStateFile));
  } else {
    fs.writeFileSync(previousStateFile, JSON.stringify([])); // Crear archivo vacío inicialmente
  }

  let isChecking = false; // Bandera para evitar ejecuciones concurrentes

  // Función para detectar cambios en el directorio
  async function detectChanges() {
    const connection = ftpConnections[equipment.mac_address];

    if (isChecking) return; // Evita ejecuciones concurrentes
    isChecking = true; // Marca el inicio de la verificación

    try {
      if (!connection.client.closed) {
        {
          const currentFiles = (await connection.client.list("/")).map(
            (file) => file.name
          );
          const addedFiles = currentFiles.filter(
            (file) => !previousFiles.includes(file)
          );
          const removedFiles = previousFiles.filter(
            (file) => !currentFiles.includes(file)
          );

          // Procesa archivos añadidos y eliminados
          if (addedFiles.length > 0) {
            console.log(`Archivos añadidos en ${equipment.id}:`, addedFiles);
            for (const addedFile of addedFiles) {
              try {
                const localPathToDownload = path.join(
                  FILE_UPLOADS_DIR,
                  addedFile
                );

                const remotePathToDownload = path.join(addedFile);

                console.log(remotePathToDownload);

                await connection.client.downloadTo(
                  localPathToDownload,
                  remotePathToDownload
                );

                const message = await readFile(localPathToDownload);
                processData(equipment, message);

                console.log("Mensaje procesado con éxito");
              } catch (error) {
                console.log(`Error al descargar ${addedFile}:`, error.message);
              }
            }
          }
          if (removedFiles.length > 0) {
            console.log(
              `Archivos eliminados en ${equipment.id}:`,
              removedFiles
            );
          }

          // Actualiza el estado actual
          fs.writeFileSync(previousStateFile, JSON.stringify(currentFiles));
          previousFiles = currentFiles; // Actualiza el estado en memoria
        }
      } else if (!connection.reconnecting) {
        console.log(`Reconectando con ${equipment.id}...`);
        connection.reconnecting = true; // Marca reconexión en proceso
        await reconnectFTP(equipment);
        connection.reconnecting = false; // Reconexión terminada
      }
    } catch (error) {
      if (
        error.code === "ECONNRESET" ||
        error.code === 421 ||
        error.code === 503 ||
        error.code === 530
      ) {
        console.error(
          `Error de conexión, intentando reconectar con ${equipment.id}...`
        );

        if (!connection.reconnecting) {
          connection.reconnecting = true;
          await reconnectFTP(equipment);
          connection.reconnecting = false;
        }
      } else {
        console.error(`Error al detectar cambios en el directorio:`, error);
      }
    } finally {
      isChecking = false; // Marca el final de la verificación
    }

    // Reinicia el intervalo si la conexión es estable
    if (!connection.reconnecting) {
      setTimeout(() => detectChanges(equipment), 1000);
    }
  }
  // Ejecutar la primera detección
  detectChanges();
}

// Función para reconectar el cliente FTP en caso de desconexión
async function reconnectFTP(equipment) {
  const currClient = ftpConnections[equipment.mac_address];

  if (currClient) {
    const { client } = currClient;

    if (client.closed) {
      try {
        await client.close();
        console.log("Cliente FTP cerrado correctamente.");
      } catch (err) {
        console.error("Error al cerrar el cliente FTP:", err);
      }
    }
    try {
      await client.access({
        host: equipment.ip_address,
        port: equipment.port,
        user: "stevlabserver",
        password: "annon",
        secure: true, // TLS explícito
        secureOptions: { rejectUnauthorized: false }, // Permitir certificados autofirmados
      });
      console.log("Reconexión FTP exitosa.");
    } catch (error) {
      console.error("Error al reconectar FTP:", error);
      setTimeout(() => reconnectFTP(client), 1000); // Intentar reconexión después de 1 segundo
    }
  }
}

// Función para cerrar la conexión FTP
async function closeFTP(mac_address) {
  const { client } = ftpConnections[mac_address];

  if (client) {
    clearInterval(client.monitoringInterval); // Detener el intervalo de monitoreo
    await client.close();
    console.log(`Conexión FTP cerrada para ${mac_address}`);
    delete ftpConnections[mac_address]; // Elimina la conexión de la lista
  } else {
    console.log(`No se encontró una conexión FTP activa para ${mac_address}`);
  }
}

module.exports = {
  closeFTP,
  connectFTP,
  ftpConnections
};
