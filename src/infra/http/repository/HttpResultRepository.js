const BaseHttpRepository = require("@/infra/http/repository/BaseHttpRepository");

class HttpResultRepository extends BaseHttpRepository {
  constructor() {
    super()
  }

  async save({ equipmentId, result }) {
    try {
      return super.post("/results", {
        equipmentId,
        result,
      });
    } catch (error) {
      throw new Error(
        `[Result] Error saving result in ${super.baseURL}: ${error.message}`
      );
    }
  }
}
module.exports = HttpResultRepository;
