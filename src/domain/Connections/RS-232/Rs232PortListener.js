const { SerialPort, ReadlineParser } = require("serialport");
const { DataEvent } = require("../../BufferStreamManagment/DataEvent");

class Rs232PortListener {
    /**
     * 
     * @param {SerialPort} port
     * @param {Equipment} equipment
     */
    constructor(port, equipment) {
        this.serialPort = port
        this.equipment = equipment
        this.dataHandler = new DataEvent(equipment.parsingConfiguration);
        this.parser = null
    }

    build() {
        // Agregar un parser para leer datos de forma más fácil (opcional)
        this.parser = this.serialPort.pipe(new ReadlineParser({ delimiter: "\n" }));

        // Manejo de errores
        this.serialPort.on("error", (err) => {
            console.error("Error en el puerto serial:", err.message);
            throw new Error("Error en el puerto serial:", err.message);
        });

        // Evento cuando el puerto está abierto
        this.serialPort.on("open", () => {
            console.log(
                `Puerto serial abierto para el equipo ${this.equipment.name} en el puerto ${this.equipment.configuration.port}`
            );
            // Enviar un mensaje al equipo (opcional)
            this.serialPort.write("Comando de prueba\n", (err) => {
                if (err) {
                    const msg = `Error al enviar datos al equipo ${this.equipment.name} en el puerto ${this.equipment.configuration.port}: ${err.message}`;
                    return console.error(msg);
                }

                console.info(
                    `Conexión exitosa con ${this.equipment.name} en el puerto ${this.equipment.configuration.port}.`
                );
            });
        });

        // Leer datos recibidos del equipo

        this.parser.on("data", (data) => {
            this.dataHandler.process(this.serialPort, data);
        });

        // Evento para detectar cierre del puerto
        this.serialPort.on("close", () => {
            console.info(
                `El puerto ${device.port} del equipo ${this.equipment.name} ha sido cerrado`
            );
        });
    }
}

module.exports = {
    Rs232PortListener
}