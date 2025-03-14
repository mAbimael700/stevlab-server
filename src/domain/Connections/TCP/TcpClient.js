const net = require("node:net");
const { ConnectionValidator } = require("./ConnectionValidator");
const { ReconnectionManager } = require("../ReconnectionManager");
const { TcpSocketListener } = require("./TcpSocketListener");

class TCPClient {
  /**
   *
   * @param {Equipment} equipment
   * @param {EquipmentRepository} equipmentRepository
   */
  constructor(equipment, equipmentRepository) {
    this.equipment = equipment;
    this.connectionValidator = new ConnectionValidator(equipmentRepository);
    this.reconnectionManager = ReconnectionManager.getInstance();
    this.client = new net.Socket();
    this.clientListener = new TcpSocketListener(this.client, this.equipment)
  }


  async build() {
    try {
      // Construye los listeners correspondientes del cliente
      this.clientListener.build()
      //Realiza la conexión del cliente TCP
      this.connect();
      return this.client;
    } catch (error) {
      console.error(error.message);
    }
  }

  /**
   * @param {net.Socket} client
   */
  connect() {
    const port = this.equipment.getPort();
    const host = this.equipment.getIpAddress();
    const { id, name } = this.equipment;


    const connectingMsg = `Intentando conectar al equipo ${name} en ${host}:${port}...`;
    console.log(connectingMsg);

    this.client
      .connect(port, host, async () => {
        const connectionSuccesfullyMsg = `Conexión exitosa con ${name} en ${host}:${port}.`
        console.log(connectionSuccesfullyMsg);
        this.reconnectionManager.removeReconnectInterval(id);
        this.client.connecting = false;
      });
  }

  /**
   *
   */
  scheduleReconnect(maxRetries = 5) {
    const equipmentId = this.equipment.id;
    const interval = this.reconnectionManager.getReconnectInterval(equipmentId);

    if (!interval) {
      let retryCount = 0; // Contador de intentos de reconexión

      const msg = `Programando reconexión para ${this.equipment.name} en 5 segundos.`;
      console.info(msg);
      emitStatusDevice(
        { connection_status: "reconnecting", last_connection: new Date() },
        this.equipment,
        msg
      );

      this.client.connecting = true;

      if (this.client) {
        const reconnectInterval = setInterval(() => {
          retryCount++; // Incrementar el contador de intentos

          if (retryCount > maxRetries) {
            // Si se excede el límite de intentos
            clearInterval(reconnectInterval); // Detener el intervalo
            this.reconnectionManager.removeReconnectInterval(equipmentId); // Limpiar el intervalo almacenado

            const errorMsg = `Se excedió el límite de ${maxRetries} intentos de reconexión para ${this.equipment.name}.`;
            console.error(errorMsg);
            emitStatusDevice(
              {
                connection_status: "disconnected",
                last_connection: new Date(),
              },
              this.equipment,
              errorMsg
            );
            return;
          }

          console.info(
            `Reintentando conexión para ${this.equipment.name} (Intento ${retryCount}/${maxRetries})...`
          );
          this.client.removeAllListeners(); // Limpia eventos antiguos
          this.connect(); // Intentar reconectar
        }, 5000);

        this.reconnectionManager.setReconnectInterval(
          equipmentId,
          reconnectInterval
        ); // Almacenar el intervalo
      }
    }
  }
}

module.exports = { TCPClient };
