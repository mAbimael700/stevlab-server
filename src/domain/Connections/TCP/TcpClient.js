const net = require("node:net");
const { ConnectionValidator } = require("./ConnectionValidator");
const { ReconnectionManager } = require("../ReconnectionManager");
const { TcpSocketListener } = require("./TcpSocketListener");
const { ClientConnection } = require("../../ClientConnection/ClientConnection");
const { Equipment } = require("../../Equipment/Equipment");

class TcpClient extends ClientConnection {
  /**
   *
   * @param {Equipment} equipment
   * @param {EquipmentRepository} equipmentRepository
   */
  constructor(equipment, equipmentRepository) {
    super(equipment.connectionType)
    this.equipment = equipment;
    this.connectionValidator = new ConnectionValidator(equipmentRepository);
    this.reconnectionManager = ReconnectionManager.getInstance();
    this.socket = new net.Socket();
    this.closed = this.socket.closed
    this.connecting = this.socket.connecting
    this.destroyed = this.socket.destroyed
    this.clientListener = new TcpSocketListener(this.socket, this.equipment)
  }


  async build() {
    try {
      // Construye los listeners correspondientes del cliente
      this.clientListener.build()
      //Realiza la conexión del cliente TCP
      this.connect();
    } catch (error) {
      console.error(error.message);
    }
  }

  connect() {
    const port = this.equipment.configuration.port;
    const host = this.equipment.configuration.ipAddress;
    const { id, name } = this.equipment;


    const connectingMsg = `Intentando conectar al equipo ${name} en ${host}:${port}...`;
    console.log(connectingMsg);

    this.socket
      .connect(port, host, async () => {
        const connectionSuccesfullyMsg = `Conexión exitosa con ${name} en ${host}:${port}.`
        console.log(connectionSuccesfullyMsg);
        this.reconnectionManager.removeReconnectInterval(id);
        this.socket.connecting = false;
      });
  }

  /**
     *
     */
  reconnect(maxRetries = 5) {
    if (this.socket.connecting || interval) {
      console.warn(
        `Ya hay un intento de reconexión en curso para ${equipment.name}.`
      );
      return;
    }

    let retryCount = 0; // Contador de intentos de reconexión

    const msg = `Programando reconexión para ${equipment.name} en 5 segundos.`;
    console.info(msg);
    emitStatusDevice(
      { connection_status: "reconnecting", last_connection: new Date() },
      equipment,
      msg
    );

    this.socket.connecting = true;

    const reconnectInterval = setInterval(async () => {
      retryCount++; // Incrementar el contador de intentos

      if (retryCount > maxRetries) {
        // Si se excede el límite de intentos
        clearInterval(reconnectInterval); // Detener el intervalo
        removeReconnectInterval(idDevice); // Limpiar el intervalo almacenado

        const errorMsg = `Se excedió el límite de ${maxRetries} intentos de reconexión para ${equipment.name}.`;
        console.error(errorMsg);
        emitStatusDevice(
          { connection_status: "disconnected", last_connection: new Date() },
          equipment,
          errorMsg
        );
        return;
      }

      console.info(
        `Reintentando conexión para ${equipment.name} (Intento ${retryCount}/${maxRetries})...`
      );
      client.removeAllListeners(); // Limpia eventos antiguos
      try {
        await connect(client, equipment); // Intentar reconectar
      } catch (error) {
        console.error(
          `Error al reconectar con ${equipment.name}: ${err.message}`
        );
      }

      client.once("connect", () => {
        console.info(`Conexión restablecida con el equipo ${equipment.name}`);
        clearInterval(reconnectInterval);
        removeReconnectInterval(idDevice);
        client.connecting = false;
      });

    }, 5000);

    setReconnectInterval(idDevice, reconnectInterval); // Almacenar el intervalo
  }
}

module.exports = { TcpClient };
