const mongoose = require('mongoose');
const { cargarAnalitos, analitos } = require('./cargarAnalitos.js');
const { cargarEquipos } = require('./cargarEquipos.js');
const password = encodeURIComponent("@labStevlabñ");

let uri =
    `mongodb+srv://dbUser:${password}@stevlabdb.0kmnn.mongodb.net/?retryWrites=true&w=majority&appName=StevlabDB`

async function connectMongoDB() {
    try {
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Conexión exitosa a MongoDB');
    } catch (error) {
        console.error('Error de conexión a MongoDB:', error);
    }
}


async function esperarConexionMongoDB(maxIntentos = 10, intervalo = 1000) {
    let intentos = 0;

    while (mongoose.connection.readyState !== 1) {
        if (intentos >= maxIntentos) {
            throw new Error('No se pudo conectar a la base de datos después de varios intentos.');
        }
        console.log(`Esperando conexión a MongoDB... Intento ${intentos + 1}`);
        await new Promise(resolve => setTimeout(resolve, intervalo));
        intentos++;
    }

    console.log('Conexión a MongoDB establecida');
}


async function cargarDatos() {
    try {
        await connectMongoDB(); // Asumimos que esta función conecta a MongoDB
        console.log('Intentando conectar a MongoDB...');

        // Esperamos a que la conexión esté establecida
        await esperarConexionMongoDB();

        const analitosMap = await cargarAnalitos();

        if (!analitosMap || analitosMap.length === 0) {
            console.error('No se encontraron analitos para cargar equipos.');
            mongoose.connection.close();
            return;
        }

        console.log('Estos son los analitos:', analitosMap);
        await cargarEquipos(analitosMap);

        console.log('Datos cargados correctamente');
        mongoose.connection.close();
    } catch (error) {
        console.error('Error cargando datos:', error);
        mongoose.connection.close();
    }
}



cargarDatos();
