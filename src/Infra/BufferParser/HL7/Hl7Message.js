const Hl7Segment = require("./Hl7Segment");

class Hl7Message {
    constructor(parser) {
        this.segments = this.createSegments(parser.segments);
        this.messageType = this.determineMessageType();
    }

    createSegments(parsedSegments) {
        return parsedSegments.map(segment => 
            new Hl7Segment(segment.name, segment.fields)
        );
    }

    determineMessageType() {
        const mshSegment = this.getSegment('MSH');
        if (mshSegment) {
            const messageType = mshSegment.getMessageType();
            return messageType ? messageType.replace('^', '_') : 'UNKNOWN';
        }
        return 'UNKNOWN';
    }

    getSegment(segmentName) {
        return this.segments.find(segment => segment.name === segmentName);
    }

    getSegments(segmentName) {
        return this.segments.filter(segment => segment.name === segmentName);
    }

    getAllSegmentNames() {
        return [...new Set(this.segments.map(segment => segment.name))];
    }

    getMessageControlId() {
        const mshSegment = this.getSegment('MSH');
        return mshSegment ? mshSegment.getMessageControlId() : null;
    }

    getPersonalInformation(){
        const pidSegment = this.getSegment("PID");
        return pidSegment
    }

    getObservations() {
        return this.getSegments('OBX').map(obx => ({
            setId: obx.getField(1),
            valueType: obx.getField(2),
            testName: obx.getField(4),
            value: obx.getField(5),
            units: obx.getField(6),
            referenceRange: obx.getField(7),
            abnormalFlags: obx.getField(8),
            status: obx.getField(11),
            dateTime: obx.getField(14)
        }));
    }

    // Genera la estructura detallada que solicitas
    getDetailedStructure() {
        const structure = {
            messageType: this.messageType,
            segments: {}
        };

        this.segments.forEach((segment, segmentIndex) => {
            const segmentKey = segment.name === 'OBX' ? 
                `${segment.name}_${segment.getField(1)}` : segment.name;
            
            structure.segments[segmentKey] = {
                name: segment.name,
                fields: segment.getAllFieldsWithNames()
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
            observations: this.getObservations()
        };
    }
}

module.exports = Hl7Message