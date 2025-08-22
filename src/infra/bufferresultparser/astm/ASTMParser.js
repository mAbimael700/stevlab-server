class ASTMParser {
  constructor(data) {
    this.rawData = data;
    this.lines = this.parseLines(data);
    this.segments = this.parseSegments();
  }

  // Método estático para parsear una línea individual de resultado
  static parseIndividualResult(line) {
    if (!line || !line.startsWith('R|')) {
      throw new Error('La línea debe ser un registro de resultado ASTM válido (debe comenzar con R|)');
    }
    
    const parser = new ASTMParser('');
    return parser.parseResult(line.trim());
  }

  // Método estático para parsear múltiples líneas individuales
  static parseIndividualResults(lines) {
    if (typeof lines === 'string') {
      lines = lines.split('\n').map(l => l.trim()).filter(l => l.length > 0);
    }
    
    return lines
      .filter(line => line.startsWith('R|'))
      .map(line => ASTMParser.parseIndividualResult(line));
  }

  // Método para agregar una línea de resultado individual al parser existente
  addIndividualResult(line) {
    if (!line || !line.startsWith('R|')) {
      throw new Error('La línea debe ser un registro de resultado ASTM válido');
    }
    
    const result = this.parseResult(line.trim());
    this.segments.results.push(result);
    return result;
  }

  parseLines(data) {
    // Limpiar y dividir por líneas, eliminando líneas vacías y espacios extra
    return data
      .split('\n')
      .map(line => line.trim())
      .filter(line => line.length > 0 && !this.isNumericLine(line));
  }

  isNumericLine(line) {
    // Filtrar líneas que solo contienen números (parecen ser metadata)
    return /^\d+$/.test(line.trim());
  }

  parseSegments() {
    const segments = {
      header: null,
      patient: null,
      orders: [],
      results: [],
      comments: [],
      terminator: null
    };

    this.lines.forEach(line => {
      const recordType = line.charAt(0);
      
      switch (recordType) {
        case 'H':
          segments.header = this.parseHeader(line);
          break;
        case 'P':
          segments.patient = this.parsePatient(line);
          break;
        case 'O':
          segments.orders.push(this.parseOrder(line));
          break;
        case 'R':
          segments.results.push(this.parseResult(line));
          break;
        case 'C':
          segments.comments.push(this.parseComment(line));
          break;
        case 'L':
          segments.terminator = this.parseTerminator(line);
          break;
      }
    });

    return segments;
  }

  parseHeader(line) {
    const fields = line.split('|');
    return {
      recordType: fields[0],
      delimiters: fields[1],
      messageControlId: fields[2],
      accessPassword: fields[3],
      senderId: fields[4] ? fields[4].split('^') : [],
      receiverId: fields[5],
      comments: fields[6],
      processingId: fields[7],
      versionNumber: fields[8],
      timestamp: fields[9] ? this.parseTimestamp(fields[9]) : null
    };
  }

  parsePatient(line) {
    const fields = line.split('|');
    const patientName = fields[5] ? fields[5].split('^') : [];
    
    return {
      recordType: fields[0],
      sequenceNumber: fields[1],
      practicePatientId: fields[2],
      laboratoryPatientId: fields[3],
      patientId: fields[4],
      patientName: {
        lastName: patientName[0] || '',
        firstName: patientName[1] || ''
      },
      mothersMaidenName: fields[6],
      birthDate: fields[7] ? this.parseDate(fields[7]) : null,
      patientSex: fields[8],
      patientRace: fields[9],
      patientAddress: fields[10],
      telephone: fields[11],
      attendingPhysician: fields[12]
    };
  }

  parseOrder(line) {
    const fields = line.split('|');
    const testInfo = fields[4] ? fields[4].split('^') : [];
    
    return {
      recordType: fields[0],
      sequenceNumber: parseInt(fields[1]),
      specimenId: fields[2],
      instrumentSpecimenId: fields[3],
      universalTestId: {
        full: fields[4],
        testId: testInfo[3] || '',
        testName: testInfo[4] || '',
        testType: testInfo[5] || '',
        specimenType: testInfo[6] || ''
      },
      priority: fields[5],
      requestedDateTime: fields[6] ? this.parseTimestamp(fields[6]) : null,
      specimenCollectionDateTime: fields[7] ? this.parseTimestamp(fields[7]) : null,
      collectorId: fields[8],
      actionCode: fields[9],
      dangerCode: fields[10],
      relevantClinicalInfo: fields[11],
      dateTimeSpecimenReceived: fields[12] ? this.parseTimestamp(fields[12]) : null,
      specimenDescriptor: fields[13],
      orderingPhysician: fields[14],
      physicianTelephone: fields[15],
      userField1: fields[16],
      userField2: fields[17],
      laboratoryField1: fields[18],
      laboratoryField2: fields[19],
      dateTimeResultsReported: fields[20] ? this.parseTimestamp(fields[20]) : null,
      instrumentCharge: fields[21],
      instrumentSectionId: fields[22],
      reportTypes: fields[23],
      reserved: fields[24],
      locationWardOfSpecimenCollection: fields[25],
      nosocomial: fields[26],
      specimenService: fields[27],
      specimenInstitution: fields[28]
    };
  }

  parseResult(line) {
    const fields = line.split('|');
    const testInfo = fields[2] ? fields[2].split('^') : [];
    const referenceRange = fields[5] ? this.parseReferenceRange(fields[5]) : {};
    
    return {
      recordType: fields[0],
      sequenceNumber: parseInt(fields[1]),
      universalTestId: {
        full: fields[2],
        testGroup: testInfo[3] || '',
        testCode: testInfo[4] || '',
        testName: testInfo[5] || '',
        specimenType: testInfo[6] || ''
      },
      dataValue: this.parseDataValue(fields[3]),
      units: fields[4],
      referenceRange: referenceRange,
      abnormalFlags: fields[6] ? fields[6].split('^') : [],
      natureOfAbnormalTesting: fields[7],
      resultStatus: fields[8],
      dateOfChangeInInstrumentNormativeValues: fields[9],
      operatorId: fields[10] ? fields[10].split('^') : [],
      dateTimeTestStarted: fields[11] ? this.parseTimestamp(fields[11]) : null,
      dateTimeTestCompleted: fields[12] ? this.parseTimestamp(fields[12]) : null,
      instrumentId: fields[13]
    };
  }

  parseComment(line) {
    const fields = line.split('|');
    return {
      recordType: fields[0],
      sequenceNumber: parseInt(fields[1]),
      commentSource: fields[2],
      commentText: fields[3],
      commentType: fields[4]
    };
  }

  parseTerminator(line) {
    const fields = line.split('|');
    return {
      recordType: fields[0],
      sequenceNumber: parseInt(fields[1]),
      terminationCode: fields[2]
    };
  }

  parseReferenceRange(range) {
    if (!range) return {};
    
    // Manejar diferentes formatos de rangos de referencia
    if (range.includes(' TO ')) {
      const [low, high] = range.split(' TO ');
      return { low: parseFloat(low), high: parseFloat(high) };
    }
    
    if (range.includes('-')) {
      const [low, high] = range.split('-');
      return { low: parseFloat(low), high: parseFloat(high) };
    }
    
    return { text: range };
  }

  parseDataValue(value) {
    if (!value) return null;
    
    const numericValue = parseFloat(value);
    return isNaN(numericValue) ? value : numericValue;
  }

  parseTimestamp(timestamp) {
    if (!timestamp || timestamp.length < 8) return null;
    
    try {
      // Formato: YYYYMMDDHHMMSS
      const year = timestamp.substring(0, 4);
      const month = timestamp.substring(4, 6);
      const day = timestamp.substring(6, 8);
      const hour = timestamp.substring(8, 10) || '00';
      const minute = timestamp.substring(10, 12) || '00';
      const second = timestamp.substring(12, 14) || '00';
      
      return new Date(`${year}-${month}-${day}T${hour}:${minute}:${second}`);
    } catch (error) {
      return timestamp; // Devolver el timestamp original si no se puede parsear
    }
  }

  parseDate(date) {
    if (!date || date.length < 8) return null;
    
    try {
      // Formato: YYYYMMDD
      const year = date.substring(0, 4);
      const month = date.substring(4, 6);
      const day = date.substring(6, 8);
      
      return new Date(`${year}-${month}-${day}`);
    } catch (error) {
      return date; // Devolver la fecha original si no se puede parsear
    }
  }

  // Métodos de conveniencia similares a tu XMLBufferParser
  getSampleResume() {
    return {
      information: this.getSampleInformation(),
      results: this.getSampleResults(),
    };
  }

  getSampleInformation() {
    const patient = this.segments.patient;
    const header = this.segments.header;
    
    if (!patient) return null;
    
    return {
      patientId: patient.practicePatientId || patient.laboratoryPatientId,
      patientName: `${patient.patientName.firstName} ${patient.patientName.lastName}`.trim(),
      sex: patient.patientSex,
      birthDate: patient.birthDate,
      timestamp: header ? header.timestamp : null
    };
  }

  getSampleResults() {
    return this.segments.results.map(result => ({
      testName: result.universalTestId.testName || result.universalTestId.testCode,
      testCode: result.universalTestId.testCode,
      testGroup: result.universalTestId.testGroup,
      value: result.dataValue,
      units: result.units,
      referenceRange: result.referenceRange,
      high: result.referenceRange.high,
      low: result.referenceRange.low,
      abnormalFlags: result.abnormalFlags,
      resultStatus: result.resultStatus,
      timestamp: result.dateTimeTestCompleted || result.dateTimeTestStarted
    }));
  }

  getResultsByTestGroup(testGroup) {
    return this.getSampleResults().filter(result => 
      result.testGroup === testGroup
    );
  }

  getResultByTestCode(testCode) {
    return this.getSampleResults().find(result => 
      result.testCode === testCode
    );
  }

  // Método para obtener todos los segmentos parseados
  getSegments() {
    return this.segments;
  }

  // Método para obtener estadísticas del parse
  getParseStats() {
    return {
      totalLines: this.lines.length,
      headerCount: this.segments.header ? 1 : 0,
      patientCount: this.segments.patient ? 1 : 0,
      orderCount: this.segments.orders.length,
      resultCount: this.segments.results.length,
      commentCount: this.segments.comments.length,
      terminatorCount: this.segments.terminator ? 1 : 0
    };
  }

  // Método estático para validar si una línea es un resultado ASTM válido
  static isValidResultLine(line) {
    if (!line || typeof line !== 'string') return false;
    
    const trimmed = line.trim();
    if (!trimmed.startsWith('R|')) return false;
    
    const fields = trimmed.split('|');
    return fields.length >= 4; // Mínimo debe tener recordType, sequence, testId, value
  }

  // Método para formatear un resultado individual para display
  static formatIndividualResult(line) {
    try {
      const result = ASTMParser.parseIndividualResult(line);
      return {
        testName: result.universalTestId.testName || result.universalTestId.testCode || 'Unknown Test',
        testCode: result.universalTestId.testCode,
        value: result.dataValue,
        units: result.units,
        referenceRange: result.referenceRange,
        isAbnormal: result.abnormalFlags && result.abnormalFlags.length > 0,
        abnormalFlags: result.abnormalFlags,
        timestamp: result.dateTimeTestCompleted || result.dateTimeTestStarted,
        formatted: `${result.universalTestId.testName || result.universalTestId.testCode}: ${result.dataValue} ${result.units || ''}${result.referenceRange.low && result.referenceRange.high ? ` (Ref: ${result.referenceRange.low}-${result.referenceRange.high})` : ''}`
      };
    } catch (error) {
      throw new Error(`Error al formatear resultado: ${error.message}`);
    }
  }
}

module.exports = ASTMParser;