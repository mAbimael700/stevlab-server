const net = require("net");
const client2 = new net.Socket();

client2.connect(3000, "127.0.0.1", () => {


})


client2.on("close", () => {
    console.log("Cliente 2 desconectado");
  });