const net = require("node:net");
const { ConnectionValidator } = require("./ConnectionValidator");
const { ReconnectionManager } = require("../ReconnectionManager");
const TcpEventHandler = require("./TcpEventHandler");
class TCPClient {
  /**
   *
   * @param {Equipment} equipment
   * @param {EquipmentRepository} equipmentRepository
   */
  constructor(equipment, equipmentRepository) {
    this.equipment = equipment;
    this.connectionValidator = new ConnectionValidator(equipmentRepository);
    this.eventHandler = null;
    this.reconnectionManager = ReconnectionManager.getInstance();
  }

  async build() {
    try {
      const client = new net.Socket();
      this.eventHandler = new TcpEventHandler(client, equipment);
      this.connect(client);
      return client;
    } catch (error) {
      console.error(error.message);
    }
  }

  /**
   * @param {net.Socket} client
   */
  connect(client) {
    const port = this.equipment.configuration.port;
    const host = this.equipment.configuration.ipAddress;
    const id = this.equipment.id;

    const connectingMsg = `Intentando conectar al equipo ${this.equipment.name} en ${host}:${port}...`;
    console.log(connectingMsg);

    emitStatusDevice(
      { connection_status: "connecting" },
      this.equipment,
      connectingMsg
    );

    client.removeAllListeners(); // Limpia cualquier listener anterior

    // Configurar el manejador de errores antes de llamar a connect
    client.on("error", (err) => {
      this.eventHandler.handleConnectionEvent(
        client,
        this.equipment,
        "error",
        scheduleReconnect,
        err
      );
    });

    client.connect(port, host, async () => {
      console.log(
        `Conexión exitosa con ${this.equipment.name} en ${host}:${port}.`
      );
      emitStatusDevice(
        { connection_status: "connected" },
        this.equipment,
        `Conexión exitosa con ${this.equipment.name} en ${host}:${port}.`
      );
      this.reconnectionManager.removeReconnectInterval(id);
      client.connecting = false;
      const validate = await this.connectionValidator.validate(client);

      if (!validate) {
        client.destroy(
          "El equipo no está registrado en las configuraciones del servidor."
        );
        throw new Error(
          "El equipo no está registrado en las configuraciones del servidor."
        );
      }

      // Configurar eventos
      client.on("data", (buffer) => {
        this.eventHandler.data(buffer);
      });

      client.on("close", () =>
        this.eventHandler.handleConnectionEvent(
          client,
          this.equipment,
          "close",
          this.scheduleReconnect
        )
      );
    });
  }

  /**
   *
   * @param {Equipment} equipment
   */
  scheduleReconnect(equipment, maxRetries = 5) {
    const equipmentId = equipment.id;
    const client = equipment.connection.client;
    const interval = this.reconnectionManager.getReconnectInterval(equipmentId);

    if (!interval) {
      let retryCount = 0; // Contador de intentos de reconexión

      const msg = `Programando reconexión para ${equipment.name} en 5 segundos.`;
      console.info(msg);
      emitStatusDevice(
        { connection_status: "reconnecting", last_connection: new Date() },
        equipment,
        msg
      );

      client.connecting = true;

      if (client) {
        const reconnectInterval = setInterval(() => {
          retryCount++; // Incrementar el contador de intentos

          if (retryCount > maxRetries) {
            // Si se excede el límite de intentos
            clearInterval(reconnectInterval); // Detener el intervalo
            this.reconnectionManager.removeReconnectInterval(equipmentId); // Limpiar el intervalo almacenado

            const errorMsg = `Se excedió el límite de ${maxRetries} intentos de reconexión para ${equipment.name}.`;
            console.error(errorMsg);
            emitStatusDevice(
              {
                connection_status: "disconnected",
                last_connection: new Date(),
              },
              equipment,
              errorMsg
            );
            return;
          }

          console.info(
            `Reintentando conexión para ${equipment.name} (Intento ${retryCount}/${maxRetries})...`
          );
          client.removeAllListeners(); // Limpia eventos antiguos
          this.connect(client); // Intentar reconectar
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
