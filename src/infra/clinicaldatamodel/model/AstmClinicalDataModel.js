const ASTMParser = require("@/infra/bufferresultparser/astm/ASTMParser");
const IClinicalDataModel = require("./IClinicalDataModel");

class AstmClinicalDataModel extends IClinicalDataModel {
    constructor() {
        super();
    }

    /**
     * Transforma datos ASTM al modelo de datos clínico estándar
     * Detecta automáticamente si es un mensaje completo o líneas individuales
     * @param {string} data - Datos ASTM en formato string
     * @returns {Object} Objeto con el formato estándar del modelo de datos
     */
    static transform(data) {
        if (!data || typeof data !== 'string') {
            throw new Error('Los datos ASTM deben ser una cadena de texto válida');
        }

        const trimmedData = data.trim();

        // Detectar el tipo de datos ASTM que tenemos
        const dataType = this._detectASTMDataType(trimmedData);

        switch (dataType) {
            case 'COMPLETE_MESSAGE':
                return this._transformCompleteMessage(trimmedData);

            case 'SINGLE_RESULT':
                return this._transformSingleResult(trimmedData);

            case 'MULTIPLE_RESULTS':
                return this._transformMultipleResults(trimmedData);

            case 'PARTIAL_MESSAGE':
                return this._transformPartialMessage(trimmedData);

            default:
                throw new Error('Formato de datos ASTM no reconocido');
        }
    }

    /**
     * Detecta el tipo de datos ASTM recibidos
     * @param {string} data - Datos ASTM
     * @returns {string} Tipo de datos detectado
     * @private
     */
    static _detectASTMDataType(data) {
        const lines = data.split('\n').map(l => l.trim()).filter(l => l.length > 0);

        if (lines.length === 0) {
            throw new Error('No hay datos ASTM válidos para procesar');
        }

        // Contar tipos de registros
        const recordTypes = {
            H: lines.filter(l => l.startsWith('H|')).length,
            P: lines.filter(l => l.startsWith('P|')).length,
            O: lines.filter(l => l.startsWith('O|')).length,
            R: lines.filter(l => l.startsWith('R|')).length,
            L: lines.filter(l => l.startsWith('L|')).length,
            C: lines.filter(l => l.startsWith('C|')).length
        };

        // Si solo hay una línea y es un resultado
        if (lines.length === 1 && recordTypes.R === 1) {
            return 'SINGLE_RESULT';
        }

        // Si hay múltiples líneas pero solo resultados
        if (recordTypes.R > 0 &&
            recordTypes.H === 0 &&
            recordTypes.P === 0 &&
            recordTypes.L === 0) {
            return recordTypes.R === 1 ? 'SINGLE_RESULT' : 'MULTIPLE_RESULTS';
        }

        // Si tiene header y terminator, es un mensaje completo
        if (recordTypes.H > 0 && recordTypes.L > 0) {
            return 'COMPLETE_MESSAGE';
        }

        // Si tiene algunos elementos pero no es completo
        if (recordTypes.R > 0 || recordTypes.P > 0 || recordTypes.O > 0) {
            return 'PARTIAL_MESSAGE';
        }

        throw new Error('Tipo de datos ASTM no reconocido');
    }

    /**
     * Transforma un mensaje ASTM completo
     * @param {string} data - Mensaje ASTM completo
     * @returns {Object} Datos transformados
     * @private
     */
    static _transformCompleteMessage(data) {
        const astmParsed = new ASTMParser(data);
        const sampleResume = astmParsed.getSampleResume();

        const sampleInfo = sampleResume.information;
        const sampleResults = sampleResume.results;

        if (!sampleInfo && (!sampleResults || sampleResults.length === 0)) {
            throw new Error('No se encontró información válida en el mensaje ASTM');
        }

        // Extraer el folio correctamente según el protocolo ASTM
        const folio = this._extractFolio(astmParsed);

        return {
            folio: folio,
            sample_id: folio, // En ASTM, folio y sample_id suelen ser lo mismo
            created_at: sampleInfo?.timestamp || new Date(),
            parameters: (sampleResults || []).map((r) => this._mapResultParameter(r)),
            patient_info: sampleInfo ? {
                name: sampleInfo.patientName,
                sex: sampleInfo.sex,
                birth_date: sampleInfo.birthDate
            } : null
        };
    }

    /**
     * Transforma un resultado individual
     * @param {string} data - Línea de resultado individual
     * @returns {Object} Datos transformados
     * @private
     */
    static _transformSingleResult(data) {
        const result = ASTMParser.parseIndividualResult(data);

        // Extraer folio de la línea de resultado
        const folio = this._extractFolioFromResult(result);

        return {
            folio: folio,
            sample_id: folio,
            created_at: result.dateTimeTestCompleted || result.dateTimeTestStarted || new Date(),
            parameters: [this._mapResultParameterFromRaw(result)],
            patient_info: null
        };
    }

    /**
     * Transforma múltiples resultados sin mensaje completo
     * @param {string} data - Múltiples líneas de resultado
     * @returns {Object} Datos transformados
     * @private
     */
    static _transformMultipleResults(data) {
        const results = ASTMParser.parseIndividualResults(data);

        if (results.length === 0) {
            throw new Error('No se encontraron resultados ASTM válidos');
        }

        // Para múltiples resultados, usar el folio del primer resultado
        // o crear uno común si no hay folios individuales
        let folio = this._extractFolioFromResult(results[0]);

        // Si todos los resultados tienen el mismo instrument ID, usar ese
        const allInstrumentIds = results.map(r => r.instrumentId).filter(id => id);
        if (allInstrumentIds.length > 0) {
            const uniqueIds = [...new Set(allInstrumentIds)];
            if (uniqueIds.length === 1) {
                folio = uniqueIds[0];
            }
        }

        // Usar la fecha más reciente
        const timestamps = results
            .map(r => r.dateTimeTestCompleted || r.dateTimeTestStarted)
            .filter(t => t)
            .sort((a, b) => new Date(b) - new Date(a));

        return {
            folio: folio,
            sample_id: folio,
            created_at: timestamps[0] || new Date(),
            parameters: results.map((r) => this._mapResultParameterFromRaw(r)),
            patient_info: null
        };
    }

    /**
     * Mapea un resultado raw del parser a parámetro del modelo
     * @param {Object} r - Resultado raw del parser
     * @returns {Object} Parámetro mapeado
     * @private
     */
    static _mapResultParameterFromRaw(r) {
        return {
            description: r.universalTestId?.testName || r.universalTestId?.testCode || 'Unknown Test',
            value: r.dataValue,
            min_range: r.referenceRange?.low,
            max_range: r.referenceRange?.high,
            test_code: r.universalTestId?.testCode,
            test_group: r.universalTestId?.testGroup,
            units: r.units,
            abnormal_flags: r.abnormalFlags?.join(',') || null,
            result_status: r.resultStatus,
            reference_range_text: r.referenceRange?.text || null
        };
    }

    /**
     * Transforma un mensaje parcial (tiene algunos elementos pero no está completo)
     * @param {string} data - Mensaje parcial
     * @returns {Object} Datos transformados
     * @private
     */
    static _transformPartialMessage(data) {
        try {
            // Intentar parsearlo como mensaje completo primero
            const astmParsed = new ASTMParser(data);
            const sampleResume = astmParsed.getSampleResume();

            if (sampleResume.results && sampleResume.results.length > 0) {
                return this._transformCompleteMessage(data);
            }
        } catch (error) {
            // Si falla, intentar extraer solo los resultados
            const lines = data.split('\n').map(l => l.trim()).filter(l => l.length > 0);
            const resultLines = lines.filter(l => l.startsWith('R|'));

            if (resultLines.length > 0) {
                return this._transformMultipleResults(resultLines.join('\n'));
            }
        }

        throw new Error('No se pudieron extraer datos válidos del mensaje parcial');
    }

    /**
     * Mapea un resultado del parser a parámetro del modelo
     * @param {Object} r - Resultado del parser
     * @returns {Object} Parámetro mapeado
     * @private
     */
    static _mapResultParameter(r) {
        return {
            description: r.testName || r.testCode || 'Unknown Test',
            value: r.value,
            min_range: r.low,
            max_range: r.high,
            test_code: r.testCode,
            test_group: r.testGroup,
            units: r.units,
            abnormal_flags: r.abnormalFlags?.join(',') || null,
            result_status: r.resultStatus,
            reference_range_text: r.referenceRange?.text || null
        };
    }

    /**
     * Extrae el folio (código escaneado/Specimen ID) de los datos ASTM
     * @param {ASTMParser} astmParsed - Parser ASTM ya procesado
     * @returns {string} Folio extraído
     * @private
     */
    static _extractFolio(astmParsed) {
        // Prioridad 1: Specimen ID del segmento Order (O.3 - campo 3)
        const orders = astmParsed.getSegments().orders;
        if (orders && orders.length > 0) {
            // El campo 3 (specimenId) del segmento Order es el folio
            const specimenId = orders[0].specimenId;
            if (specimenId) {
                return specimenId;
            }
        }

        // Prioridad 2: Patient ID del segmento Patient
        const patient = astmParsed.getSegments().patient;
        if (patient && patient.practicePatientId) {
            return patient.practicePatientId;
        }

        // Prioridad 3: Laboratory Patient ID
        if (patient && patient.laboratoryPatientId) {
            return patient.laboratoryPatientId;
        }

        // Prioridad 4: Extraer de instrumentSpecimenId del Order
        if (orders && orders.length > 0 && orders[0].instrumentSpecimenId) {
            return orders[0].instrumentSpecimenId;
        }

        // Si no hay nada, generar uno único
        return `ASTM_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    }

    /**
     * Extrae el folio de una línea de resultado individual
     * @param {Object} result - Resultado parseado
     * @returns {string} Folio extraído o generado
     * @private
     */
    static _extractFolioFromResult(result) {
        // En las líneas de resultado, a veces el folio viene al final
        // Ejemplo: R|1|^^^1101^Na-C|140|mmol/L|136 TO 145|||R||ADMIN||20250808132646|c402830
        // El último campo podría ser el folio/specimen ID

        if (result.instrumentId) {
            return result.instrumentId;
        }

        // Si no hay folio explícito, generar uno basado en el timestamp y test
        const timestamp = result.dateTimeTestCompleted || result.dateTimeTestStarted;
        const testCode = result.universalTestId?.testCode || 'UNK';

        if (timestamp) {
            const dateStr = timestamp.toISOString().replace(/[-T:.]/g, '').substring(0, 14);
            return `${testCode}_${dateStr}`;
        }

        return `${testCode}_${Date.now()}_${Math.random().toString(36).substr(2, 5)}`;
    }

    /**
     * Transforma una línea individual de resultado ASTM
     * @param {string} resultLine - Línea de resultado ASTM individual (formato R|...)
     * @param {Object} options - Opciones adicionales
     * @returns {Object} Objeto con el formato estándar del modelo de datos
     */
    static transformIndividualResult(resultLine, options = {}) {
        if (!ASTMParser.isValidResultLine(resultLine)) {
            throw new Error('La línea proporcionada no es un resultado ASTM válido');
        }

        const result = ASTMParser.parseIndividualResult(resultLine);

        // Usar valores por defecto si no se proporcionan en las opciones
        const sampleId = options.sampleId ||
            options.folio ||
            `ASTM_SINGLE_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

        return {
            folio: sampleId,
            sample_id: sampleId,
            created_at: result.timestamp || options.timestamp || new Date(),
            parameters: [{
                description: result.universalTestId.testName || result.universalTestId.testCode || 'Unknown Test',
                value: result.dataValue,
                min_range: result.referenceRange?.low,
                max_range: result.referenceRange?.high,
                test_code: result.universalTestId.testCode,
                test_group: result.universalTestId.testGroup,
                units: result.units,
                abnormal_flags: result.abnormalFlags?.join(',') || null,
                result_status: result.resultStatus,
                reference_range_text: result.referenceRange?.text || null
            }],
            // Información del paciente desde las opciones si está disponible
            patient_info: options.patientInfo || {
                name: options.patientName || null,
                sex: options.patientSex || null,
                birth_date: options.patientBirthDate || null
            }
        };
    }

    /**
     * Transforma múltiples líneas de resultado ASTM individuales
     * @param {string|Array} resultLines - Líneas de resultado ASTM
     * @param {Object} options - Opciones adicionales
     * @returns {Object} Objeto con el formato estándar del modelo de datos
     */
    static transformMultipleResults(resultLines, options = {}) {
        const results = ASTMParser.parseIndividualResults(resultLines);

        if (results.length === 0) {
            throw new Error('No se encontraron líneas de resultado ASTM válidas');
        }

        const sampleId = options.sampleId ||
            options.folio ||
            `ASTM_MULTI_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

        // Usar la fecha más reciente de los resultados o la proporcionada
        const timestamps = results
            .map(r => r.timestamp)
            .filter(t => t)
            .sort((a, b) => new Date(b) - new Date(a));

        const mostRecentTimestamp = timestamps[0] || options.timestamp || new Date();

        return {
            folio: sampleId,
            sample_id: sampleId,
            created_at: mostRecentTimestamp,
            parameters: results.map((r) => ({
                description: r.universalTestId.testName || r.universalTestId.testCode || 'Unknown Test',
                value: r.dataValue,
                min_range: r.referenceRange?.low,
                max_range: r.referenceRange?.high,
                test_code: r.universalTestId.testCode,
                test_group: r.universalTestId.testGroup,
                units: r.units,
                abnormal_flags: r.abnormalFlags?.join(',') || null,
                result_status: r.resultStatus,
                reference_range_text: r.referenceRange?.text || null
            })),
            patient_info: options.patientInfo || {
                name: options.patientName || null,
                sex: options.patientSex || null,
                birth_date: options.patientBirthDate || null
            }
        };
    }

    /**
     * Método de conveniencia para validar datos ASTM antes del transform
     * @param {string} data - Datos ASTM
     * @returns {boolean} true si los datos son válidos
     */
    static isValidASTMData(data) {
        try {
            this._detectASTMDataType(data.trim());
            return true;
        } catch (error) {
            return false;
        }
    }

    /**
     * Obtiene información sobre el tipo de datos detectados
     * @param {string} data - Datos ASTM
     * @returns {Object} Información del tipo de datos
     */
    static getDataInfo(data) {
        try {
            const dataType = this._detectASTMDataType(data.trim());
            const lines = data.split('\n').map(l => l.trim()).filter(l => l.length > 0);

            const recordTypes = {
                H: lines.filter(l => l.startsWith('H|')).length,
                P: lines.filter(l => l.startsWith('P|')).length,
                O: lines.filter(l => l.startsWith('O|')).length,
                R: lines.filter(l => l.startsWith('R|')).length,
                L: lines.filter(l => l.startsWith('L|')).length,
                C: lines.filter(l => l.startsWith('C|')).length
            };

            return {
                type: dataType,
                totalLines: lines.length,
                recordCounts: recordTypes,
                isComplete: dataType === 'COMPLETE_MESSAGE',
                hasResults: recordTypes.R > 0,
                hasPatientInfo: recordTypes.P > 0
            };
        } catch (error) {
            return {
                type: 'INVALID',
                error: error.message,
                totalLines: 0,
                recordCounts: {},
                isComplete: false,
                hasResults: false,
                hasPatientInfo: false
            };
        }
    }
}

module.exports = AstmClinicalDataModel;