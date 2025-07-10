const net = require("net");
const bl = require("bl");
const fs = require("fs");
const path = require("path");
const parser = require("../src/lib/parsers/HL7-type4/parser");

const CHAR_DELIMITER = "\x1C";
const PORT = 1234; // Cambia el puerto según sea necesario

const tcpServer = net.createServer((socket) => {
  const bufferList = new bl();

  console.log("Cliente conectado desde:", socket.remoteAddress);

  socket.on("data", (data) => {
    // Agrega el chunk al buffer acumulador
    bufferList.append(data);

    // Convierte el buffer acumulado a string con encoding utf-8 sin perder formato
    const accumulatedData = bufferList.toString("utf-8");

    // Verifica si el acumulador contiene el delimitador
    const delimiterIndex = accumulatedData.indexOf(CHAR_DELIMITER);

    if (delimiterIndex !== -1) {
      // Extraemos el mensaje completo hasta el delimitador, respetando el formato de saltos de línea
      const completeMessage = accumulatedData.slice(0, delimiterIndex + 1);

      try {
        console.log("Mensaje completo recibido:");
        console.log(completeMessage); // Mostrar el mensaje completo con sus saltos de línea

        // Procesa el mensaje con el parser
        const results = parser.parser(completeMessage);

        if (results) {
          console.log("Resultados del parser:", results);
          // Aquí podrías guardar o emitir resultados según sea necesario
        } else {
          console.warn("Parser devolvió resultados inválidos");
        }

      } catch (error) {
        console.error("Error al procesar el mensaje:", error);
      }

      // Limpia el buffer eliminando los datos procesados hasta el delimitador
      bufferList.consume(Buffer.byteLength(completeMessage, "utf-8"));
    }
  });

  socket.on("end", () => {
    console.log("Cliente desconectado:", socket.remoteAddress);
  });

  socket.on("error", (error) => {
    console.error("Error en la conexión:", error);
    socket.destroy();
  });
});

/* tcpServer.listen(PORT, () => {
  console.log(`Servidor TCP escuchando en el puerto ${PORT}`);
}); */

function createTCPConnection(port, host) {
  // Configuration ===================================
 
  const client = new net.Socket();

  client.connect(port, host, () => {
    console.log(
      `Servidor LIS conectado al equipo ${host} en el puerto: ${port}`
    );
  });

  const bufferList = new bl();
  client.on("data", async (data) => {
    console.log(data);
    
  });

  client.on("close", () => {
    console.log("Conexión cerrada");
  });

  client.on("error", (err) => {
    console.error("Error de conexión:", err);
  });


}

createTCPConnection(8080, "192.168.1.164")