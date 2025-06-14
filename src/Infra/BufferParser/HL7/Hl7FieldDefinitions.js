class Hl7FieldDefinitions {
    static MSH_FIELDS = {
        1: "Field Separator",
        2: "Encoding Characters",
        3: "Sending Application",
        4: "Sending Facility",
        5: "Receiving Application",
        6: "Receiving Facility",
        7: "Date/Time Of Message",
        8: "Security",
        9: "Message Type",
        10: "Message Control ID",
        11: "Processing ID",
        12: "Version ID",
        13: "Sequence Number",
        14: "Continuation Pointer",
        15: "Accept Acknowledgment Type",
        16: "Application Acknowledgment Type",
        17: "Country Code",
        18: "Character Set",
        19: "Principal Language Of Message",
        20: "Alternate Character Set Handling Scheme"
    };

    static PID_FIELDS = {
        1: "Set ID - PID",
        2: "Patient ID",
        3: "Patient Identifier List",
        4: "Alternate Patient ID - PID",
        5: "Patient Name",
        6: "Mother's Maiden Name",
        7: "Date/Time of Birth",
        8: "Administrative Sex",
        9: "Patient Alias",
        10: "Race",
        11: "Patient Address",
        12: "County Code",
        13: "Phone Number - Home",
        14: "Phone Number - Business",
        15: "Primary Language"
    };

    static OBR_FIELDS = {
        1: "Set ID - OBR",
        2: "Placer Order Number",
        3: "Filler Order Number",
        4: "Universal Service Identifier",
        5: "Priority",
        6: "Requested Date/Time",
        7: "Observation Date/Time",
        8: "Observation End Date/Time",
        9: "Collection Volume",
        10: "Collector Identifier",
        11: "Specimen Action Code",
        12: "Danger Code",
        13: "Relevant Clinical Information",
        14: "Specimen Received Date/Time",
        15: "Specimen Source",
        16: "Ordering Provider"
    };

    static OBX_FIELDS = {
        1: "Set ID - OBX",
        2: "Value Type",
        3: "Observation Identifier",
        4: "Observation Sub-Id",
        5: "Observation Value",
        6: "Units",
        7: "References Range",
        8: "Abnormal Flags",
        9: "Probability",
        10: "Nature of Abnormal Test",
        11: "Observation Result Status",
        12: "Effective Date of Reference Range",
        13: "User Defined Access Checks",
        14: "Date/Time of the Observation",
        15: "Producer's ID",
        16: "Responsible Observer",
        17: "Observation Method"
    };

    static PV1_FIELDS = {
        1: "Set ID - PV1",
        2: "Patient Class",
        3: "Assigned Patient Location",
        4: "Admission Type",
        5: "Preadmit Number",
        6: "Prior Patient Location",
        7: "Attending Doctor",
        8: "Referring Doctor"
    };

    static getFieldDefinition(segmentType, fieldIndex) {
        const definitions = this[`${segmentType}_FIELDS`];
        return definitions ? definitions[fieldIndex] : `Field ${fieldIndex}`;
    }

    static getAllFieldsForSegment(segmentType) {
        return this[`${segmentType}_FIELDS`] || {};
    }
}

module.exports = Hl7FieldDefinitions