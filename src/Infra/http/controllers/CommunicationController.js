class CommunicationController {
  constructor(dependencies = {}) {
    this.tcpService = dependencies.tcpService;
    this.networkService = dependencies.networkService;
    this.comPortService = dependencies.comPortService;
    this.equipmentService = dependencies.equipmentService;
    this.equipmentConnectionService = dependencies.equipmentConnectionService;

    this.configureController();
  }

  async getTcpServerInformation(req, res) {
    try {
      const serverInfo = await this.tcpService.getServerInformation();
      return res.status(200).json(serverInfo);
    } catch (error) {
      return res.status(500).json({
        message: "Hubo un error al obtener la información del servidor TCP.",
      });
    }
  }

  async inicializeTcpServer(req, res) {
    try {
      const data = req.body;
      const result = await this.tcpService.initialize(data);
      return res.status(201).json(result);
    } catch (error) {
      return res.status(403).json({
        error: error.message,
        cause: error.cause,
      });
    }
  }

  async stopTcpServer(req, res) {
    try {
      await this.tcpService.stop();
      return res.status(200).json({
        message: "Servidor TCP detenido correctamente",
      });
    } catch (error) {
      return res.status(500).json({
        message: "Hubo un error al detener el servidor TCP.",
      });
    }
  }

  async getTcpNetworkInterfaces(req, res) {
    try {
      const interfaces = await this.networkService.getTcpNetworkInterfaces();
      return res.status(200).json({
        content: interfaces,
      });
    } catch (error) {
      return res.status(500).json({
        message: "Hubo un error al obtener las interfaces de red TCP.",
      });
    }
  }

  async getComPorts(req, res) {
    try {
      const ports = await this.comPortService.getComPorts();
      return res.status(200).json({
        content: ports,
      });
    } catch (error) {
      return res.status(500).json({
        message: "Hubo un error al obtener los puertos COM.",
      });
    }
  }

  async inicialitzeAllEquipmentConnections(req, res) {
    try {
      const result = await this.equipmentConnectionService.initializeAllConnections();
      return res.status(201).json(result);
    } catch (error) {
      return res.status(403).json({
        error: error.message,
        cause: error.cause,
      });
    }
  }

  async closeAllEquipmentConnections(req, res) {
    try {
      await this.equipmentConnectionService.closeAllConnections();
      return res.status(200).json({
        message: "Todas las conexiones de equipos cerradas correctamente",
      });
    } catch (error) {
      return res.status(500).json({
        message: "Hubo un error al cerrar las conexiones de equipos.",
      });
    }
  }

  async getEquipmentProfiles(req, res) {
    try {
      const profiles = await this.equipmentService.getEquipmentProfiles();
      return res.status(200).json({
        content: profiles,
      });
    } catch (error) {
      return res.status(500).json({
        message: "Hubo un error al obtener los perfiles de equipos.",
      });
    }
  }

  async getById(req, res) {
    const { id } = req.params;

    try {
      const equipment = await this.equipmentService.getById(id);
      return res.status(200).json(equipment);
    } catch (error) {
      return res.status(404).json({
        message: "No se encontró el equipo con esa Id",
      });
    }
  }

  async inicializeEquipmentConnectionById(req, res) {
    const { id } = req.params;

    try {
      const data = req.body;
      const result = await this.equipmentConnectionService.initializeConnectionById(id, data);
      return res.status(201).json(result);
    } catch (error) {
      return res.status(403).json({
        error: error.message,
        cause: error.cause,
      });
    }
  }

  async updateEquipmentConnectionById(req, res) {
    const { id } = req.params;

    try {
      const data = req.body;
      const result = await this.equipmentConnectionService.updateConnectionById(id, data);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(403).json({
        error: error.message,
        cause: error.cause,
      });
    }
  }

  async closeEquipmentConnectionById(req, res) {
    const { id } = req.params;

    try {
      await this.equipmentConnectionService.closeConnectionById(id);
      return res.status(200).json({
        message: "Conexión del equipo cerrada correctamente",
      });
    } catch (error) {
      return res.status(403).json({
        message: error.message,
      });
    }
  }

  configureController() {
    this.getTcpServerInformation = this.getTcpServerInformation.bind(this);
    this.inicializeTcpServer = this.inicializeTcpServer.bind(this);
    this.stopTcpServer = this.stopTcpServer.bind(this);
    this.getTcpNetworkInterfaces = this.getTcpNetworkInterfaces.bind(this);
    this.getComPorts = this.getComPorts.bind(this);
    this.inicialitzeAllEquipmentConnections = this.inicialitzeAllEquipmentConnections.bind(this);
    this.closeAllEquipmentConnections = this.closeAllEquipmentConnections.bind(this);
    this.getEquipmentProfiles = this.getEquipmentProfiles.bind(this);
    this.getById = this.getById.bind(this);
    this.inicializeEquipmentConnectionById = this.inicializeEquipmentConnectionById.bind(this);
    this.updateEquipmentConnectionById = this.updateEquipmentConnectionById.bind(this);
    this.closeEquipmentConnectionById = this.closeEquipmentConnectionById.bind(this);
  }
}

module.exports = CommunicationController;