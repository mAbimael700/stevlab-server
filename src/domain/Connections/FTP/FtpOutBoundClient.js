const { FtpClient } = require("./FtpClient");

class FtpOutBoundClient extends FtpClient {
  constructor(equipment) {
    super(equipment)
  }


}

module.exports = {
  FtpOutBoundClient,
};
