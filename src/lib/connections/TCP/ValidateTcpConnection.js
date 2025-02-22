const { getMacAddress } = require("../../getMacAddress");
const net = require("node:net");

class ValidateTcpConnection {

  /**
   * @param {Object} equipmentRepository - The repository to query equipment data.
   */
  constructor(equipmentRepository) {
    this.equipmentRepository = equipmentRepository;
  }

  /**
 * Valida si el equipo está registrado en el servidor LIS.
 * @param {net.Socket} socket - El socket de conexión TCP/IP del equipo.
 * @returns {Promise<string | null>}
 */
  async validateConnection(socket) {

    try {
      // Obtener dirección IP remota
      let currentRemoteIpAddress = socket.remoteAddress;
      // Verificar si es una dirección IPv6 mapeada a IPv4 
      if (currentRemoteIpAddress.startsWith("::ffff:")) {
        currentRemoteIpAddress = currentRemoteIpAddress.split("::ffff:")[1];
      }

      // Obtener la dirección MAC utilizando la dirección IP remota
      const currentRemoteMacAddress = await getMacAddress(currentRemoteIpAddress);

      if (!currentRemoteMacAddress) {
        console.warn(
          `No se encontró la dirección MAC para el equipo con la dirección IP ${currentRemoteIpAddress}. Cerrando conexión.`
        );
        socket.destroy();
        return false;
      }

      let foundEquipment = equipmentRepository.getByMacAddress(currentRemoteMacAddress);

      if (!foundEquipment) {
        console.warn("Equipo no registrado. Conexión cerrada.");
        socket.destroy();
        return false;
      }

      return true
    } catch (error) {
      console.error(error.message)
      throw new Error(error.message)
    }
  }
}


module.exports = {
  ValidateTcpConnection,
};
