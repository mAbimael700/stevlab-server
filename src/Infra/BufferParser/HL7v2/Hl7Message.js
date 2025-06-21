const Hl7Segment = require("./Hl7Segment");

class Hl7Message {
  constructor(parser) {
    this.segments = this.createSegments(parser.segments);
    this.messageType = this.determineMessageType();
  }

  static CHART_KEYWORDS = ["Histogram", "Line", "line"];

  createSegments(parsedSegments) {
    return parsedSegments.map(
      (segment) => new Hl7Segment(segment.name, segment.fields)
    );
  }

  determineMessageType() {
    const mshSegment = this.getSegment("MSH");
    if (mshSegment) {
      const messageType = mshSegment.getMessageType();
      return messageType ? messageType.replace("^", "_") : "UNKNOWN";
    }
    return "UNKNOWN";
  }

  getSegment(segmentName) {
    return this.segments.find((segment) => segment.name === segmentName);
  }

  getSegments(segmentName) {
    return this.segments.filter((segment) => segment.name === segmentName);
  }

  getAllSegmentNames() {
    return [...new Set(this.segments.map((segment) => segment.name))];
  }

  getMessageControlId() {
    const mshSegment = this.getSegment("MSH");
    return mshSegment ? mshSegment.getMessageControlId() : null;
  }

  getMessageControlHeader() {
    const mshSegment = this.getSegment("MSH").fields;

    return {
      sendingApplication: mshSegment.at(2),
      sendingFacility: mshSegment.at(3),
      dateMessage: mshSegment.at(6),
      messageType: mshSegment.at(8),
      messageControlId: mshSegment.at(9),
      processingId: mshSegment.at(10),
    };
  }

  getPersonalInformation() {
    const fields = this.getSegment("PID").fields;

    const pidSegment = {
      setId: fields.at(1),
      patientId: fields.at(3),
      patientName: fields.at(11),
      administrativeSex: fields.at(8),
    };
    return pidSegment;
  }

  /**
   *
   * @returns {any[]}
   */
  getObservations() {
    return this.getSegments("OBX")
      .filter(
        (obx) =>
          obx.getField(2) === "NM" &&
          !Hl7Message.CHART_KEYWORDS.some((k) => obx.getField(3).includes(k))
      )
      .map((obx) => ({
        setId: obx.getField(1),
        valueType: obx.getField(2),
        observationIdentifier: obx.getField(3),
        testName: obx.getField(4),
        value: obx.getField(5),
        units: obx.getField(6) || null,
        referenceRange: obx.getField(7),
        abnormalFlags: obx.getField(8),
        status: obx.getField(11),
        dateTime: obx.getField(14),
      }));
  }

  getOrderObservationRequestInformation() {
    const fields = this.getSegment("OBR").fields;

    const obrSegment = {
      setId: fields.at(1),
      fillerOrderNumber: fields.at(3),
      placeOrderNumber: fields.at(2),
      observationDateTime: fields.at(6),
      observationEndDateTime: fields.at(7),
      collectorIdentifier: fields.at(10),
      specimenReceivedDateTime: fields.at(14),
      specimenResource: fields.at(15),
    };
    return obrSegment;
  }

  // Genera la estructura detallada que solicitas
  getDetailedStructure() {
    const structure = {
      messageType: this.messageType,
      segments: {},
    };

    this.segments.forEach((segment, segmentIndex) => {
      const segmentKey =
        segment.name === "OBX"
          ? `${segment.name}_${segment.getField(1)}`
          : segment.name;

      structure.segments[segmentKey] = {
        name: segment.name,
        fields: segment.getAllFieldsWithNames(),
      };
    });

    return structure;
  }

  // Genera un resumen más legible
  getSummary() {
    return {
      messageType: this.messageType,
      messageControlId: this.getMessageControlId(),
      segmentCount: this.segments.length,
      segmentTypes: this.getAllSegmentNames(),
      observations: this.getObservations(),
    };
  }
}

module.exports = Hl7Message;
