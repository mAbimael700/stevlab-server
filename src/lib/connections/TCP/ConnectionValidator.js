const {
  EquipmentRepository,
} = require("../../../domain/Equipment/EquipmentRepository");
const { getMacAddress } = require("../../getMacAddress");
class ConnectionValidator {
  constructor() {
    this.equipmentRepository = new EquipmentRepository();
  }

  /**
   * Valida si el equipo está registrado en el servidor LIS.
   * @param {string} socket - El socket de conexión TCP/IP del equipo.
   * @returns {Promise<Equipment | null>}
   */
  async validate(ipAddress) {
    try {
      // Verificar si es una dirección IPv6 mapeada a IPv4
      if (ipAddress.startsWith("::ffff:")) {
        ipAddress = ipAddress.split("::ffff:")[1];
      }

      // Obtener la dirección MAC utilizando la dirección IP remota
      const currentRemoteMacAddress = await getMacAddress(ipAddress);

      if (!currentRemoteMacAddress) {
        console.warn(
          `No se encontró la dirección MAC para el equipo con la dirección IP ${ipAddress}. Cerrando conexión.`
        );
        throw new Error(
          `No se encontró la dirección MAC para el equipo con la dirección IP ${ipAddress}. Cerrando conexión.`
        );
      }

      let foundEquipment = this.equipmentRepository.findByMacAddress(
        currentRemoteMacAddress
      );

      if (!foundEquipment) {
        console.warn("Equipo no registrado. Conexión cerrada.");
        throw new Error(
          "El equipo que se intenta conectar no se encuentra registrado en la configuración del servidor. Conexión cerrada."
        );
      }

      return foundEquipment;
    } catch (error) {
      console.error(
        "Hubo un error en la validación de conexión del equipo",
        error.message
      );
      throw new Error(error.message, error);
    }
  }
}

module.exports = {
  ConnectionValidator,
};
