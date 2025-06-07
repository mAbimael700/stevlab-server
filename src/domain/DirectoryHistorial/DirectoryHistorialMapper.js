const MapperUtils = require("../../Infra/Mapper/MapperUtils");

class DirectoryHistorialMapper {
    static FIELD_MAPPINGS = {
        id: 'id',
        filename: 'filename',
        filepath: 'filepath',
        modifiedAt: 'modified_at',
    }

    /**
     * Mapea mapDirectoryHistorial
     * @param {Object} raw - Datos raw del equipment profile
     * @returns {Object|undefined} Directory Historial mapeado
     */
    static mapDirectoryHistorial(raw) {
        if (MapperUtils.isNullOrUndefined(raw)) return undefined;

        return MapperUtils.mapFields(raw, this.FIELD_MAPPINGS);
    }

    static mapDirectoryHistorialInArray(rawArray) {
        if (!Array.isArray(rawArray)) return [];

        return MapperUtils.mapArray(rawArray, (raw) => this.mapDirectoryHistorial(raw));
    }
}

module.exports = DirectoryHistorialMapper