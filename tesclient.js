const net = require('net');

const FILE_SEPARATOR = '\x1C'; // Carácter de separación de archivo (ASCII 28)
const HOST = 'localhost';
const PORT = 3000;

// Mensaje de prueba que se dividirá en chunks
const mensaje = `
MSH|^~\&|DH3x|Dymind|||20241107192932||ORU^R01|20241107_113445_408|P|2.3.1||||||UNICODE\n
PID|1||||^Adela\n
PV1|1\n
OBR|1||N003|01001^Automated Count^99MRC||20241107113435|20241107113445|||||||20241107113435||||||||20241107160411||HM||||admin||||admin\n
OBX|1|IS|02001^Take Mode^99MRC||O||||||F\n
OBX|2|IS|02002^Blood Mode^99MRC||W||||||F\n
OBX|3|IS|02003^Test Mode^99MRC||||||||F\n
OBX|4|NM|30525-0^Age^LN|||yr|||||F\n
OBX|5|IS|09001^Remark^99MRC||||||||F\n
OBX|6|IS|03001^Ref Group^99MRC||General||||||F\n
OBX|7|NM|6690-2^WBC^LN||11,49|10*9/L|3,50-9,50|H~A|||F\n
OBX|8|NM|736-9^LYM%^LN||21,0|%|20,0-50,0|~N|||F\n
OBX|9|NM|20482-6^GRAN%^LN||75,7|%|50,0-70,0|H~A|||F\n
OBX|10|NM|32155-4^MID%^LN||3,3|%|3,0-9,0|~N|||F\n
OBX|11|NM|731-0^LYM#^LN||2,41|10*9/L|1,10-3,20|~N|||F\n
OBX|12|NM|19023-1^GRAN#^LN||8,70|10*9/L|2,00-7,00|H~A|||F\n
OBX|13|NM|32154-7^MID#^LN||0,38|10*9/L|0,10-0,90|~N|||F\n
OBX|14|NM|789-8^RBC^LN||3,93|10*12/L|3,80-5,80|~N|||F\n
OBX|15|NM|718-7^HGB^LN||11,7|g/dL|11,5-17,5|~N|||F\n
OBX|16|NM|4544-3^HCT^LN||36,5|%|35,0-50,0|~N|||F\n
OBX|17|NM|787-2^MCV^LN||92,9|fL|82,0-100,0|~N|||F\n
OBX|18|NM|785-6^MCH^LN||29,7|pg|27,0-34,0|~N|||F\n
OBX|19|NM|786-4^MCHC^LN||32,0|g/dL|31,6-35,4|~N|||F\n
OBX|20|NM|788-0^RDW-CV^LN||13,6|%|11,5-14,5|~N|||F\n
OBX|21|NM|21000-5^RDW-SD^LN||43,5|fL|35,0-56,0|~N|||F\n
OBX|22|NM|777-3^PLT^LN||216|10*9/L|125-350|~N|||F\n
OBX|23|NM|32623-1^MPV^LN||10,3|fL|7,0-11,0|~N|||F\n
OBX|24|NM|32207-3^PDW^LN||11,1|fL|9,0-17,0|~N|||F\n
OBX|25|NM|11003^PCT^99MRC||0,223|%|0,108-0,282|~N|||F\n
OBX|26|NM|48386-7^P-LCR^LN||29,2|%|11,0-45,0|~N|||F\n
OBX|27|NM|34167-7^P-LCC^LN||63|10*9/L|30-90|~N|||F\n
`;
const chunks = mensaje.match(/.{2,60}/g); // Dividir en fragmentos de 10 caracteres

const client = new net.Socket();

client.connect(PORT, HOST, () => {
    console.log('Conectado al servidor');

    // Enviar cada chunk de forma secuencial con un pequeño retraso
    chunks.forEach((chunk, index) => {
        setTimeout(() => {
            client.write(chunk); // Enviar el chunk al servidor
            console.log(`Enviando chunk: ${chunk}`);

            // Si es el último chunk, enviar el FILE_SEPARATOR
            if (index === chunks.length - 1) {
                client.write(FILE_SEPARATOR);
                console.log('Enviando FILE_SEPARATOR para indicar el final del mensaje');
            }
        }, index * 200); // Retraso de 500 ms entre chunks
    });
});

// Manejar el evento 'data' en caso de recibir una respuesta del servidor
client.on('data', (data) => {
    console.log('Respuesta del servidor:', data.toString());
});

// Manejar el evento 'close' cuando la conexión se cierre
client.on('close', () => {
    console.log('Conexión cerrada');
});

// Manejar el evento 'error' en caso de error
client.on('error', (err) => {
    console.error('Error en el cliente:', err);
});
