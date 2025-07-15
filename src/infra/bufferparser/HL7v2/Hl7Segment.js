const Hl7FieldDefinitions = require("./Hl7FieldDefinitions");

class Hl7Segment {
  constructor(name, fields) {
    this.name = name;
    this.fields = fields.map(
      (field) => field?.replace(/[\n\r\x1C]/g, "") || ""
    ); // Limpiar caracteres de control
    this.fieldDefinitions = Hl7FieldDefinitions.getAllFieldsForSegment(name);
  }

  getField(index) {
    return this.fields[index]?.trim() || "";
  }

  getFieldWithName(index) {
    const value = this.getField(index);
    const name = Hl7FieldDefinitions.getFieldDefinition(this.name, index);
    return {
      index,
      name,
      value,
    };
  }

  getAllFieldsWithNames() {
    const result = {};
    this.fields.forEach((value, index) => {
      if (index > 0 && value) {
        // Omitir el índice 0 que es el nombre del segmento
        const fieldName = Hl7FieldDefinitions.getFieldDefinition(
          this.name,
          index
        );
        result[`${this.name}.${index}`] = {
          name: fieldName,
          value: value,
        };
      }
    });
    return result;
  }

  // Métodos específicos para cada tipo de segmento
  getMessageType() {
    if (this.name === "MSH") {
      return this.getField(9);
    }
    return null;
  }

  getMessageControlId() {
    if (this.name === "MSH") {
      return this.getField(10);
    }
    return null;
  }

  getPatientId() {
    if (this.name === "PID") {
      return this.getField(1);
    }
    return null;
  }

  getObservationValue() {
    if (this.name === "OBX") {
      return this.getField(5);
    }
    return null;
  }

  getTestName() {
    if (this.name === "OBX") {
      return this.getField(4);
    }
    return null;
  }
}

module.exports = Hl7Segment;
