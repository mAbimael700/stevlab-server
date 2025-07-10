const { parse } = require("date-fns");

class Cm200BufferParser {
    constructor(data) {
        this.lines = data.split('\n').map(l => l.trim())
        this.sampleResults = this.setSampleResults()

    }

    getSampleResults() {
        return this.sampleResults
    }


    getFields(line) {
        return line.split(";").map(l => l.trim());
    }

    setSampleResults() {
        return this.lines.map(l => {
            const fields = this.getFields(l)

            const protocol = fields.at(0)
            const patientName = fields.at(1)
            const date = fields.at(6)
            const hour = fields.at(7)
            const status = fields.at(8)
            const sampleId = fields.at(9)

            const dateTime = parse(date + hour, 'MM/dd/yyHH:mm:ss', new Date())
            const tests = this.getTests(fields)

            return {
                sampleId,
                protocol,
                patientName,
                status,
                dateTime,
                tests
            }

        })
    }


    getTests(fields) {
        const tests = []
        for (let i = 10; i < fields.length; i += 3) {
            if (fields[i] && fields.at(i + 1) && fields.at(i + 2)) {
                tests.push({
                    testName: fields.at(i)?.trim(),
                    value: fields.at(i + 1)?.trim(),
                    units: fields.at(i + 2)?.trim(),
                });
            }
        }

        return tests
    }

}

module.exports = Cm200BufferParser