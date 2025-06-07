const { z } = require("zod");

class CommunicationProfileSchema {

    static schema = z.object({
        id: z.string(),
        checksumRegex: z.string(),
        type: z.string(),
    })
}

module.exports = CommunicationProfileSchema