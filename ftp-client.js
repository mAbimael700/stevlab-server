const ftp = require("basic-ftp");
const fs = require("fs");

const config = {
    host: "tu-servidor-ftp.com",
    user: "tu-usuario",
    password: "tu-password",
    secure: false
};

let client;
const previousStateFile = "./previous-state.json";

async function connectToFtp() {
    client = new ftp.Client();
    try {
        await client.access(config);
        console.log("Conexión FTP establecida");
    } catch (err) {
        console.error("Error al conectar al servidor FTP:", err);
    }
}

async function listRemoteFiles() {
    try {
        return await client.list("/ruta/remota/");
    } catch (err) {
        console.error("Error al listar archivos:", err);
        return [];
    }
}

async function detectChanges() {
    const currentFiles = (await listRemoteFiles()).map(file => file.name);
    let previousFiles = [];

    // Cargar estado anterior si existe
    if (fs.existsSync(previousStateFile)) {
        previousFiles = JSON.parse(fs.readFileSync(previousStateFile));
    }

    // Detectar archivos añadidos
    const addedFiles = currentFiles.filter(file => !previousFiles.includes(file));
    // Detectar archivos eliminados
    const removedFiles = previousFiles.filter(file => !currentFiles.includes(file));

    if (addedFiles.length > 0) {
        console.log("Archivos añadidos:", addedFiles);
    }
    if (removedFiles.length > 0) {
        console.log("Archivos eliminados:", removedFiles);
    }

    // Guardar el estado actual
    fs.writeFileSync(previousStateFile, JSON.stringify(currentFiles));
}

async function startMonitoring() {
    await connectToFtp();  // Establecer la conexión al inicio

    setInterval(async () => {
        await detectChanges();
    }, 1000); // Monitorear cada 1 segundo
}

// Iniciar monitoreo
startMonitoring();
