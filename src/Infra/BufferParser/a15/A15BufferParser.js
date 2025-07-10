const { parse } = require("date-fns");

const RESULT_TYPE_KEYWORDS = ["SER", "URI", "LIQ", "WBL", "SEM"];

class A15BufferParser {
    /**
     * 
     * @param {string} data 
     */
    constructor(data) {
        this.lines = data.trim().split('\n')
        this.sampleResults = new Map()
        this.setSampleResults()
    }

    setSampleResults() {

        this.lines.forEach(l => {

            const parsedLine = this.parseResultLine(l)
            if (!parsedLine) return;

            const sampleResult = this.sampleResults.get(parsedLine.sampleId)
            if (sampleResult) {
                if (!this.isDuplicate(sampleResult.tests, parsedLine)) {
                    sampleResult.tests.push(parsedLine)


                    // Actualizar dateTime en tiempo real
                    if (parsedLine.dateTime.getTime() > sampleResult.dateTime.getTime()) {
                        sampleResult.dateTime = parsedLine.dateTime;
                    }

                    return
                }
            }

            this.sampleResults.set(parsedLine.sampleId, {
                sampleId: parsedLine.sampleId,
                dateTime: parsedLine.dateTime,
                tests: [parsedLine]
            })
        })

    }

    /**
     * 
     * @param {string} line 
     */
    parseResultLine(line) {
        if (!line.trim()) return null;
        const segments = line.split(/\s+/);

        if (segments.length < 6) throw new Error(`Línea malformada: ${line}`);

        let nameValuesList = []

        let i = 1;

        // Obtener el nombre del parámetro hasta encontrar "SER" u otros tipo de resultado en el equipo A15
        while (segments.at(i) && !RESULT_TYPE_KEYWORDS.some((k) => segments.at(i) == k)) {
            nameValuesList.push(segments.at(i));
            i++;
        }

        const sampleId = segments.at(0)
        const type = segments.at(i)?.trim()
        const value = segments.at(i + 1)?.trim();
        const units = segments.at(i + 2)?.trim();
        const date = segments.at(i + 3)?.trim();
        const hour = segments.at(i + 4)?.trim();
        const testName = nameValuesList.join(" ")

        const dateString = date + hour;
        const format = "dd/MM/yyyyHH:mm:ss";
        const dateTime = parse(dateString, format, new Date());

        return {
            sampleId,
            testName,
            type,
            value,
            units,
            date,
            hour,
            dateTime
        }
    }

    getSampleResults() {
        return Array.from(this.sampleResults.values());
    }

    isDuplicate(tests, newTest) {
        return tests.some(t =>
            t.dateTime.getTime() === newTest.dateTime.getTime() &&
            t.name === newTest.name &&
            t.value === newTest.value
        );
    }
}

module.exports = A15BufferParser