const ftp = require("basic-ftp"); // Importa el cliente FTP
// Variable para almacenar las conexiones FTP activas
let ftpConnections = {};


// Configuración del límite y la frecuencia de reconexión
const MAX_RETRIES = 5;
const INITIAL_DELAY = 1000; // 1 segundo


// Obtiene todas las
function getFtpConnections() {
    return ftpConnections
}

function setFtpConnections(connections) {
    return ftpConnections = connections
}

function addClientFtpConnection(macAddress, client) {
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

function updateFtpConnection(macAddress, options) {
    const connections = getFtpConnections()
    const ftpConnectionToUpdate = connections[macAddress];

    if (ftpConnectionToUpdate) {
        // Guardamos los atributos actualizados pasados
        ftpConnectionToUpdate = { ...ftpConnectionToUpdate, ...options };
        // Actualizar la variable global
        setFtpConnections(connections);
    }

}

function deleteFtpConnection(macAddress) {
    delete ftpConnections[macAddress]
    console.log("Cliente FTP eliminado");

}

async function addFtpConnection(equipment, retryCount = 0) {
    const ftpConnections = getFtpConnections();

    // Si ya existe una conexión, ciérrala antes de intentar una nueva conexión
    const existConnection = ftpConnections[equipment.mac_address];
    if (existConnection && !existConnection.client.closed) {
        await closeFTP(equipment.mac_address);
    }

    // Creamos un objeto de la clase ftp
    const client = new ftp.Client();

    // Agregamos el estado de reconexión específico al equipo
    addClientFtpConnection(equipment.mac_address, client)

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



// Función para cerrar la conexión FTP
async function closeFTP(equipment) {
    const ftpConnections = getFtpConnections()
    const { client } = ftpConnections[equipment.mac_address];

    if (client) {
        clearInterval(client.monitoringInterval); // Detener el intervalo de monitoreo
        await client.close();
        console.log(`Conexión FTP cerrada para ${equipment.mac_address}`);
        deleteFtpConnection(macAddress)
    } else {
        console.log(`No se encontró una conexión FTP activa para ${equipment.mac_address}`);
    }
}



// Función para reconectar el cliente FTP en caso de desconexión
async function reconnectFTP(equipment) {
    const ftpConnections = getFtpConnections()
    const { client } = ftpConnections[equipment.mac_address];

    if (client) {

        if (client.closed) {
            try {
                await client.close();
                console.log(`Cliente FTP cerrado correctamente para el equipo ${equipment.name} en el host ${equipment.ip_address}:${equipment.port}`);
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
            console.log(`Reconexión FTP exitosa con el equipo ${equipment.name} en el host ${equipment.ip_address}:${equipment.port}`);
        } catch (error) {
            console.error("Error al reconectar FTP:", error);
            setTimeout(() => reconnectFTP(client), 1000); // Intentar reconexión después de 1 segundo
        }
    }
}


module.exports = {
    getFtpConnections,
    addFtpConnection,
    deleteFtpConnection,
    updateFtpConnection,
    reconnectFTP

}