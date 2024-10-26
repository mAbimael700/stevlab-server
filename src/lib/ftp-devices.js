const ftp = require('basic-ftp'); // Importa el cliente FTP

// Variable para almacenar las conexiones FTP activas
let ftpConnections = {};

// Función para iniciar una conexión FTP
async function connectFTP(equipment) {
  const client = new ftp.Client();
  client.ftp.verbose = true; // Para ver los logs
  try {
    await client.access({
      host: equipment.ip_address,
      port: equipment.port,
      user: "annon", // reemplaza con tu usuario
      password: "annon", // reemplaza con tu contraseña
    });
    console.log(`Conexión FTP establecida con ${equipment.id}`);
    ftpConnections[equipment.mac_address] = client; // Almacena la conexión en memoria
  } catch (error) {
    console.error(`Error al conectar FTP con ${equipment.id}:`, error);
  }
}

// Función para cerrar la conexión FTP
async function closeFTP(mac_address) {
  const client = ftpConnections[mac_address];
  if (client) {
    await client.close();
    console.log(`Conexión FTP cerrada para ${mac_address}`);
    delete ftpConnections[mac_address]; // Elimina la conexión de la lista
  } else {
    console.log(`No se encontró una conexión FTP activa para ${mac_address}`);
  }
}

module.exports = {
  closeFTP, 
  connectFTP
}
