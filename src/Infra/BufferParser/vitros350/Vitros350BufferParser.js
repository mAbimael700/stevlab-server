const testRegex =
    /!(\d{3}[fh])([A-Za-z+-]+)\s*(\d+\.?\d*)\s*([a-zA-Z/%]*)\s*([A-Za-z0-9]+)/;

class Vitros350BufferParser {
    constructor(data) {
        this.data = data
        this.lineRegex = /!(\d{3}[afhc])[^!]+/g;
        this.lines = data.match(lineRegex) || [];
        this.segments = this.getSegments()
    }


    getSegments() {
        const messageHeader = this.lines.find(l => l.startsWith("!000a"))
        const tests = this.lines.filter(l => testRegex.test(l))
        const patientInfo = this.lines.find(l => l.startsWith("!001c"))

        return { messageHeader, tests, patientInfo }
    }

    getSampleResume() {
        
    }

    getTests() {
        return this.segments.tests.map(l => {
            const parts = l.match(testRegex);
            let [_, key, testName, value, units, calibrationCode] = parts;

            if (!units) {
                const match = value.match(/(\d+\.?\d*)([a-zA-Z/%]+)/)
                if (match) {
                    value = match.at(1)
                    units = match(2);
                }
            }

            return {
                key,
                testName,
                value,
                units,
                calibrationCode
            }
        })
    }

    getMessageHeader() {
        const header = this.segments.messageHeader
            .split(" ").filter((e) => e.trim() !== "");


        const timestampt = header.at(1)

        const hour = timestampt.slice(0, 2); // Hora
        const minute = timestampt.slice(2, 4); // Minutos
        const second = timestampt.slice(4, 6); // Segundos
        const yearShort = timestampt.slice(6, 8); // Últimos dos dígitos del año
        const month = timestampt.slice(8, 10) - 1; // Mes (diciembre, base 0)
        const day = timestampt.slice(10, 12); // Día

        const year = yearShort < 50 ? 2000 + parseInt(yearShort) : 1900 + parseInt(yearShort);

        const date = `${day}/${month}/}${year}`
        const dateTime = new Date(year, month, day, hour, minute, second);

        currentResult = {
            date,
            dateTime,
            sampleId: timestampt.slice(12),
        };
    }

    getPatientInformation() {
        const nameParts = this.segments.patientInfo.match(/!001c([A-Za-z\s]+)/);

        if (nameParts) {
            const patientName = nameParts.at(1)
                .trim()
                .split(" ")
                .filter((e) => e.trim() !== "").join(" ");
            const sex = pacientInfo.at(-1) || "O"

            return {
                patientName,
                sex
            }
        }
    }


}