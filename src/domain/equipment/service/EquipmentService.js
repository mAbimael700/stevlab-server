const EquipmentDto = require("../dto/EquipmentDto");

class EquipmentService {
    /**
     *
     * @param {Object} dependencies
     */
    constructor(dependencies) {
        this.equipmentRepository = dependencies.equipmentRepository;
        this.equipmentProfileRepository = dependencies.equipmentProfileRepository;
        this.equipmentConfigurationRepository = dependencies.equipmentConfigurationRepository;
    }

    async getAll() {
        const equipments = await this.equipmentRepository.findAll({
            includeRelations: true,
        });

        if (equipments.length > 0) {
            return equipments.map((e) => new EquipmentDto(e));
        }

        return [];
    }

    /**
     *
     * @param {Number} id
     * @param {boolean} includeRelations
     */
    async getById(id, {includeRelations = false}) {
        const result = await this.equipmentRepository.findById(id, {includeRelations});

        if (result) {
            return new EquipmentDto(result);
        }

        return null;
    }

    async save(data) {
        const equipmentProfile = await this.equipmentProfileRepository
            .findById(data.equipmentProfile);

        if (equipmentProfile) {
            await this.validateConfiguration(equipmentProfile, data);

            const creationDate = new Date();

            const equipment = await this.equipmentRepository.create({
                name: data.name,
                profile_id: data.equipmentProfile,
                created_at: creationDate,
                modified_at: creationDate,
                active: true,
            });

            await this.equipmentConfigurationRepository
                .create({
                    equipment_id: equipment.id,
                    ip_address: data.equipmentConfiguration.ipAddress,
                    mac_address: data.equipmentConfiguration.macAddress,
                    port: data.equipmentConfiguration.port,
                    baud_rate: data.equipmentConfiguration.baudRate,
                    remote_directory: data.equipmentConfiguration.remoteDirectory,
                });


            return await this.equipmentRepository.findById(equipment.id, {includeRelations: true});
        }

        throw new Error("Equipment profile does not exist");
    }

    async findByIpAddress(ipAddress) {
        const result = await this.equipmentRepository.findByIpAddress(ipAddress, {
            includeRelations: true,
        });

        if (result) {
            return new EquipmentDto(result);
        }

        return null;
    }

    async findByMacAddress(macAddress) {
        const result = await this.equipmentRepository.findByMacAddress(macAddress, {
            includeRelations: true,
        });

        if (result) {
            return new EquipmentDto(result);
        }

        return null;
    }


    async updateLastConnection(equipmentId, lastConnection) {
        const result = this.getById(equipmentId);
    }

    /**
     * Actualiza un equipo por su ID con datos parciales
     * @param {Number} id - ID del equipo a actualizar
     * @param {Object} data - Datos parciales del equipo
     * @returns {Promise<EquipmentDto|null>} El equipo actualizado o null si no existe
     * @throws {Error} Si el perfil de equipo no existe
     */
    async updateById(id, data) {
        // Verificar que el equipo existe
        const existingEquipment = await this.equipmentRepository.findById(id, {includeRelations: true});

        if (!existingEquipment) {
            return null;
        }

        // Preparar datos de actualización para el equipo
        const equipmentUpdate = {};

        if (data.name) {
            equipmentUpdate.name = data.name;
        }

        // Si se proporciona un nuevo perfil de equipo, verificar que existe
        if (data.equipmentProfile) {
            const equipmentProfile = await this.equipmentProfileRepository
                .findById(data.equipmentProfile);

            if (!equipmentProfile) {
                throw new Error("El perfil de equipo especificado no existe");
            }

            equipmentUpdate.profile_id = data.equipmentProfile;
        }

        // Siempre actualizar la fecha de modificación
        equipmentUpdate.modified_at = new Date();

        // Actualizar el equipo
        if (Object.keys(equipmentUpdate).length > 0) {
            await this.equipmentRepository.update(id, equipmentUpdate);
        }

        // Actualizar la configuración del equipo si se proporciona
        if (data.equipmentConfiguration) {
            const configUpdate = {};
            const config = data.equipmentConfiguration;

            if (config.ipAddress !== undefined) configUpdate.ip_address = config.ipAddress;
            if (config.macAddress !== undefined) configUpdate.mac_address = config.macAddress;
            if (config.port !== undefined) configUpdate.port = config.port;
            if (config.baudRate !== undefined) configUpdate.baud_rate = config.baudRate;
            if (config.remoteDirectory !== undefined) configUpdate.remote_directory = config.remoteDirectory;

            // Si hay un perfil nuevo o el existente, verificar la configuración
            const profileToValidate = data.equipmentProfile
                ? await this.equipmentProfileRepository.findById(data.equipmentProfile)
                : existingEquipment.equipmentProfile;

            if (Object.keys(configUpdate).length > 0) {
                // Crear un objeto que combine la configuración existente con las actualizaciones para validación
                const fullConfigForValidation = {
                    equipmentConfiguration: {
                        ipAddress: configUpdate.ip_address !== undefined ? configUpdate.ip_address : existingEquipment.equipmentConfiguration[0].ip_address,
                        macAddress: configUpdate.mac_address !== undefined ? configUpdate.mac_address : existingEquipment.equipmentConfiguration[0].mac_address,
                        port: configUpdate.port !== undefined ? configUpdate.port : existingEquipment.equipmentConfiguration[0].port,
                        baudRate: configUpdate.baud_rate !== undefined ? configUpdate.baud_rate : existingEquipment.equipmentConfiguration[0].baud_rate,
                        remoteDirectory: configUpdate.remote_directory !== undefined ? configUpdate.remote_directory : existingEquipment.equipmentConfiguration[0].remote_directory
                    }
                };

                // Validar la configuración completa
                await this.validateConfiguration(profileToValidate, fullConfigForValidation);

                // Actualizar la configuración
                await this.equipmentConfigurationRepository.update(
                    existingEquipment.id,
                    configUpdate
                );
            }
        }

        // Devolver el equipo actualizado
        return new EquipmentDto(
            await this.equipmentRepository.findById(id, {includeRelations: true})
        );
    }

    /**
     *
     * @param equipmentProfile
     * @param data
     * @returns {Promise<void>}
     */
    async validateConfiguration(equipmentProfile, data) {
        const {
            macAddress,
            ipAddress,
            port,
            baudRate,
            remoteDirectory
        } = data.equipmentConfiguration;

        switch (equipmentProfile.communication_type) {
            case 'TcpInbound':
                if (!(macAddress && ipAddress)) {
                    throw new Error("IP address and port are required");
                }
                break;

            case 'TcpOutbound':
                if (!(macAddress && ipAddress && port)) {
                    throw new Error("IP address, port and macAddress are required");
                }
                break;

            case 'Serial':
                if (!baudRate) {
                    throw new Error("Baud rate is required");
                }
                break;

            case 'Ftp':
                if (!(ipAddress && port && remoteDirectory)) {
                    throw new Error("IP address, port and remote directory are required");
                }
                break;

            default:
                throw new Error("Invalid communication type: " + equipmentProfile.communication_type)

        }
    }
}

module.exports = EquipmentService;
