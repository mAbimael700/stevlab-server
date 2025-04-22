const { app } = require('electron');
const path = require('path');
const fs = require('fs');
const axios = require('axios');
const { machineIdSync } = require('node-machine-id');

class LicenseManager {
  constructor() {
    this.licensePath = path.join(app.getPath('userData'), 'license.json');
    this.apiBaseUrl = 'https://servidor-licencias.com/api';
  }

  async verifyLicense() {
    try {
      // Verificar si existe archivo de licencia
      if (!fs.existsSync(this.licensePath)) return false;
      
      const licenseData = JSON.parse(fs.readFileSync(this.licensePath));
      
      // Verificación local rápida (fecha de expiración)
      if (licenseData.expiryDate && new Date(licenseData.expiryDate) < new Date()) {
        return false;
      }
      
      // Verificación remota con el servidor
      const response = await axios.post(`${this.apiBaseUrl}/verify`, {
        licenseKey: licenseData.licenseKey,
        machineId: machineIdSync(),
        appVersion: app.getVersion()
      }, {
        timeout: 5000
      });
      
      if (response.data.valid) {
        // Actualizar datos locales si es necesario
        if (response.data.newExpiryDate) {
          licenseData.expiryDate = response.data.newExpiryDate;
          fs.writeFileSync(this.licensePath, JSON.stringify(licenseData));
        }
        return true;
      }
      return false;
    } catch (error) {
      console.error('License verification error:', error);
      // En caso de error de conexión, permitir uso temporal si la licencia local es válida
      return fs.existsSync(this.licensePath);
    }
  }

  async activateLicense(licenseKey) {
    try {
      const response = await axios.post(`${this.apiBaseUrl}/activate`, {
        licenseKey,
        machineId: machineIdSync(),
        appVersion: app.getVersion()
      });
      
      if (response.data.success) {
        const licenseData = {
          licenseKey,
          expiryDate: response.data.expiryDate,
          activatedAt: new Date().toISOString(),
          features: response.data.features || []
        };
        
        fs.writeFileSync(this.licensePath, JSON.stringify(licenseData));
        return true;
      }
      return false;
    } catch (error) {
      console.error('License activation error:', error);
      return false;
    }
  }

  getLicenseFeatures() {
    try {
      if (fs.existsSync(this.licensePath)) {
        const licenseData = JSON.parse(fs.readFileSync(this.licensePath));
        return licenseData.features || [];
      }
      return [];
    } catch (error) {
      return [];
    }
  }
}

module.exports = new LicenseManager();