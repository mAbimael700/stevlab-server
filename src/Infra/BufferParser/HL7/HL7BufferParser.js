class Hl7BufferParser {

    /**
     * 
     * @param {string} data 
     */
    constructor(data) {
        this.data = data
        this.segmentFieldSeparator = this.getFieldSeparator()
        this.segments = this.getSegments()
    }
    /**
    * Divide el mensaje HL7 (Solo contempla los segmentos MSH|PID|PV1|OBR|OBX )
    * @returns Retorna un array de los segmentos por cada tipo de mensaje
    */
    separateSegments() {
        return this.data.trim().split(/(?=MSH|PID|PV1|OBR|OBX)/);
    }

    /**
     * 
     * @returns 
     */
    getFieldSeparator() {
        const mshSegment = this.separateSegments(this.data).find((segment) =>
            segment.startsWith("MSH")
        );

        //Devuelve la posición del segmento dónde está definido el separador de segmentos
        return mshSegment ? mshSegment.charAt(3) : "|";

    }

    /**
     * 
     * @param {string} segment 
     * @returns 
     */
    getSegmentFields(segment) {
        let fields = segment.split(this.segmentFieldSeparator);

        return { name: fields[0], fields };
    }

    getSegments() {
        const segments = this.separateSegments()
        return segments.map(s => {
            const fields = this.getSegmentFields(s)
            return fields
        })

    }

    // Función para generar un mensaje ACK
    static generateHl7Ack(
        messageId,
        emisor = "Mindray",
        receptor = "BS-120",
        status = "AA"
    ) {
        const timestamp = this.generateHl7Date(); // Formato HL7
        const mshSegment = `MSH|^~\\&|||${emisor}|${receptor}|${timestamp}||ACK^R01|${messageId}|P|2.3.1||||0||ASCII|||`;
        const msaSegment = `MSA|${status}|${messageId}|Message accepted|||0|`;

        const ackMessage = `\x0B${mshSegment}\r${msaSegment}\r\x1C\x0D`;
        return ackMessage;
    }


    static generateHl7Date(date = new Date()) {
        return date.toISOString().replace(/[-:T]/g, "").slice(0, 14); // Formato AAAAMMDDHHMMSS
    }

    setup(){
        
    }
}

module.exports = Hl7BufferParser