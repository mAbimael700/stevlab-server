const BaseHttpRepository = require("@/infra/http/repository/BaseHttpRepository");

class HttpEquipmentRepository extends BaseHttpRepository {
  constructor() {
    super();
  }

  async findByIpAndMacAddress(ipAddress, macAddress) {
    try {
      return await super.get(`/equipment?ip=${ipAddress}&mac=${macAddress}`);
    } catch (error) {
      throw new Error(`[Equipment] Error finding by IP and MAC address: ${error.message}`);
    }
  }
}

module.exports = HttpEquipmentRepository;
