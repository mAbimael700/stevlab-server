const net = require("net");

const pidSegment = `PID|1||||^Isidra\n`;
const obrSegment = `OBR|1||N002|01001^Automated Count^99MRC||20241024124650|20241024124711|||||||20241024124650||||||||||HM||||||||admin\n`;






const parameters = [
  `OBX|10|NM|32155-4^MID%^LN||7,1|%|3,0-9,0|~N|||F`,
  `OBX|11|NM|731-0^LYM#^LN||2,26|10*9/L|1,10-3,20|~N|||F`,
  `OBX|12|NM|19023-1^GRAN#^LN||2,13|10*9/L|2,00-7,00|~N|||F`,
  `OBX|13|NM|32154-7^MID#^LN||0,34|10*9/L|0,10-0,90|~N|||F`,
  `OBX|14|NM|789-8^RBC^LN||4,33|10*12/L|3,80-5,80|~A|||F`,
];

const client2 = new net.Socket();

client2.connect(3000, "127.0.0.1", () => {
  console.log("Cliente 2 conectado");

  parameters.forEach((param, index) => {
    const message = pidSegment + obrSegment + param;

    const chunks = [
      message.slice(0, Math.ceil(message.length / 2)),
      message.slice(Math.ceil(message.length / 2)),
    ];

    setTimeout(() => {
      console.log(`Cliente 2 enviando mensaje ${index + 1} (${param.split("|")[3] || "Parámetro desconocido"})`);
      
      chunks.forEach((chunk, chunkIndex) => {
        setTimeout(() => {
          client2.write(chunk);
          console.log(`Cliente 2 envió chunk ${chunkIndex + 1} del mensaje ${index + 1}`);
          if (chunkIndex === chunks.length - 1) {
            client2.write("\n"); // Enviar separador final
          }
        }, chunkIndex * 100); // Retraso entre los chunks
      });

      if (index === parameters.length - 1) {
        setTimeout(() => {
          console.log("Cliente 2 terminó de enviar todos los parámetros");
          //client2.end();
        }, 200);
      }
    }, index * 18000); // Retraso de 20 segundos entre mensajes
  });
});

client2.on("close", () => {
  console.log("Cliente 2 desconectado");
});
