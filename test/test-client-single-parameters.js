const net = require("net");

const pidSegment = `PID|1||||^Isidra\n`;
const obrSegment = `OBR|1|1234567|N002|01001^Automated Count^99MRC||20241024124650|20241024124711|||||||20241024124650||||||||||HM||||||||admin\n`;

const parameters = [
  `OBX|10|NM|32155-4^MID%^LN||7,1|%|3,0-9,0|~N|||F`,
  `OBX|11|NM|731-0^LYM#^LN||2,26|10*9/L|1,10-3,20|~N|||F`,
  `OBX|12|NM|19023-1^GRAN#^LN||2,13|10*9/L|2,00-7,00|~N|||F`,
  `OBX|13|NM|32154-7^MID#^LN||0,34|10*9/L|0,10-0,90|~N|||F`,
  `OBX|14|NM|789-8^RBC^LN||4,33|10*12/L|3,80-5,80|~A|||F`,
];

const client2 = new net.Socket();

client2.connect(3000, "127.0.0.1", async () => {
  console.log("Cliente 2 conectado");

  for (const [index, param] of parameters.entries()) {
    const message = pidSegment + obrSegment + param;

    // Dividir mensaje en chunks
    const chunks = [
      message.slice(0, Math.ceil(message.length / 2)),
      message.slice(Math.ceil(message.length / 2)),
    ];

    console.log(`Cliente 2 enviando mensaje ${index + 1} (${param.split("|")[3] || "Parámetro desconocido"})`);

    // Enviar los chunks con retraso
    for (const [chunkIndex, chunk] of chunks.entries()) {
      client2.write(chunk);
      console.log(`Cliente 2 envió chunk ${chunkIndex + 1} del mensaje ${index + 1}`);
      await new Promise((resolve) => setTimeout(resolve, 100)); // Retraso entre chunks
    }

    // Enviar separador final
    client2.write("\n");

    // Retraso entre mensajes
    await new Promise((resolve) => setTimeout(resolve, 18000));
  }

  console.log("Cliente 2 terminó de enviar todos los parámetros");
  client2.end();
});

client2.on("close", () => {
  console.log("Cliente 2 desconectado");
});
