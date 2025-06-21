const { parse } = require("date-fns");

class FujifilmNX600BufferParser {
  constructor(buffer, separatorSpliter = ",") {
    this.buffer = buffer;
    this.separatorSpliter = separatorSpliter;
    this.rawData = this.parse();
  }

}

module.exports = FujifilmNX600BufferParser;