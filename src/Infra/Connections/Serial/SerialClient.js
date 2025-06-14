const ClientOutBoundConnection = require("../../ClientConnection/ClientOutBoundConnection");
const EquipmentDto = require("../../../domain/Equipment/EquipmentDto");
const SerialClientCoreFactory = require("./SerialClientCoreFactory");

class SerialClient extends ClientOutBoundConnection {
  /**
   *
   * @param {EquipmentDto} equipment
   * @param {SerialClientCoreFactory} clientCoreFactory
   */
  constructor(equipment, clientCoreFactory) {
    super("Serial");
    this.equipment = equipment;
    this.clientCoreFactory = clientCoreFactory;

    // Crear dependencias usando el factory
    this.client = this.clientCoreFactory.createSerialPort(this.equipment);
    this.eventsHandler = this.clientCoreFactory.createEventsHandler(
      this.client,
      this.equipment
    );
    this.serialPortListener = this.clientCoreFactory.createPortListener(
      this.client,
      this.eventsHandler
    );
  }
  /**
   * Conecta el puerto serial
   * @returns {Promise<void>}
   */
  async connect() {
    return new Promise((resolve, reject) => {
      if (this.client.isOpen) {
        resolve();
        return;
      }

      const onOpen = () => {
        cleanUp();
        resolve();
      };

      const onError = (error) => {
        cleanUp();
        reject(new Error(`Error al conectar puerto serial: ${error.message}`));
      };

      const cleanUp = () => {
        this.client.off("open", onOpen);
        this.client.off("error", onError);
      };

      this.client.once("open", onOpen);
      this.client.once("error", onError);

      // Si el puerto no está abierto, intentar abrirlo
      if (!this.client.opening) {
        this.client.open();
      }
    });
  }

  /**
   * Desconecta el puerto serial
   * @returns {Promise<void>}
   */
  async disconnect() {
    return new Promise((resolve, reject) => {
      if (!this.client.isOpen) {
        resolve();
        return;
      }

      this.client.close((error) => {
        if (error) {
          reject(new Error(`Error al cerrar puerto serial: ${error.message}`));
        } else {
          resolve();
        }
      });
    });
  }
}

module.exports = SerialClient;
