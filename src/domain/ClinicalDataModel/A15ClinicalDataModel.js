const A15BufferParser = require("../../infra/bufferparser/A15/A15BufferParser");

class A15ClinicalDataModel {

    static transform(data) {
        const sampleResults = new A15BufferParser(data).getSampleResults()

        return sampleResults.map(s => {
            const parameters = s.tests.map(t => ({
                description: t.testName,
                value: t.value,
                created_at: t.dateTime,
                unit_measurement: t.units
            }))

            return {
                folio: s.sampleId,
                sample_id: s.sampleId,
                created_at: s.dateTime,
                parameters
            }
        })
    }
}

module.exports = A15ClinicalDataModel 