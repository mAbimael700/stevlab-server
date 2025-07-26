const {z} = require("zod");
const idSchema = z.union([z.number(), z.bigint()]);

class IdNumberValidator {
    static validate(id) {
        return idSchema.safeParse(Number(id)).success;
    }
}

module.exports = IdNumberValidator

