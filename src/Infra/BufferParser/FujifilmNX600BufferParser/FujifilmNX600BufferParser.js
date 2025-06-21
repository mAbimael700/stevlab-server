const { parse } = require("date-fns");

class FujifilmNX600BufferParser {
  constructor(buffer, separatorSpliter = ",") {
    this.buffer = buffer;
    this.separatorSpliter = separatorSpliter;
    this.lines = this.getLines();
  }

  getLines() {
    return this.buffer
      .split(/[\x02\x03]/)
      .filter((section) => section.trim() !== "")
      .map((s) =>
        s
          .trim()
          .split(this.separatorSpliter)
          .map((e) => e.trim())
      )
      .map((l) => ({
        type: l.at(0),
        fields: l,
      }));
  }

  getSampleResume() {
    const resultLines = this.lines.filter((l) => l.type === "R");
    return resultLines.map((l) => {
      const { fields } = l;

      const date = fields.at(2);
      const hour = fields.at(3);
      const dateTime = parse(date + hour, "dd-MM-yyyyHH:mm", new Date());

      return {
        date,
        hour,
        dateTime,
        sample_id: fields.at(5),
        results: this.getSampleResults(fields),
      };
    });
  }

  getSampleResults(fields) {
    // Extrae los parámetros de laboratorio y sus resultados
    const results = [];
    for (let i = 12; i < fields.length; i += 7) {
      if (fields[i]) {
        const unit = fields
          .at(i + 2)
          ?.trim()
          .split(" ");

        const testName = fields.at(i).trim();
        const value = fields
          .at(i + 2)
          ?.trim()
          .split(" ")
          .at(0);
        const units = unit.at(unit.length - 1);

        const result = {
          testName,
          value,
          units,
          min_range: fields.at(i + 4)?.trim(),
          max_range: fields.at(i + 5)?.trim(),
          indicator: fields.at(i + 6)?.trim() || "=",
        };

        results.push(result);
      }
    }
    return results;
  }
}

module.exports = FujifilmNX600BufferParser;
