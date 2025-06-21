const Cm200BufferParser = require("../../infra/BufferParser/cm200/Cm200BufferParser")

class Cm200ClinicalDataModel {
    static transform(data) {
        const sampleResults = new Cm200BufferParser(data).getSampleResults()

        return sampleResults.map(s => {

            const parameters = s.tests.map(t => ({
                description: t.testName,
                value: t.value,
                unit_measurement: t.units
            }))

            return {
                folio: s.protocol,
                sample_id: s.sampleId,
                created_at: s.dateTime,
                parameters
            }
        })
    }
}

module.exports = Cm200ClinicalDataModel