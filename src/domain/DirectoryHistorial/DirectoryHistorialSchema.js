const { z } = require("zod");

class DirectoryHistorialSchema {

    static schema = z.object({
        id: z.number(),
        equipment_id: z.number(),
        filename: z.string(),
        filepath: z.string(),
        modified_at: z.date()
    })
}

module.exports = DirectoryHistorialSchema