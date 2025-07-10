class IDeviceService {
  /**
   * @returns {Promise<object[]>}
   */
  async getDevices() {}

  /**
   * @param {string} area
   * * @returns {Promise<object[]>}
   */
  async getDevicesByArea(area) {}

  /**
   * @returns {Promise<object[]>}
   */
  async getDeviceProfiles() {}

  /**
   *
   * @param {string} id
   * @returns {Promise<object | undefined>}
   */
  async getDeviceById(id) {}

  /**
   *
   * @param {object} data
   * @returns {Promise<object>}
   */
  async save(data) {}

  /**
   * @param {string} id
   * @returns {Promise<void>}
   */
  delete(id) {}
}

module.exports = {
  IDeviceService,
};
