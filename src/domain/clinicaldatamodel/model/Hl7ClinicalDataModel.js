const { parse } = require("date-fns");
const Hl7ParserFactory = require("@/infra/bufferresultparser/hl7v2/Hl7ParserFactory");
const IClinicalDataModel = require("./IClinicalDataModel");

class Hl7ClinicalDataModel extends IClinicalDataModel {
  constructor() {
    super();
  }

  /**
   *
   * @param {string} data
   */
  static transform(data) {
    const hl7 = Hl7ParserFactory.parse(data);

    const obr = hl7.getOrderObservationRequestInformation();
    const observations = hl7.getObservations();

    const dateString = obr.observationEndDateTime;

    const year = parseInt(dateString.substring(0, 4), 10);
    const month = parseInt(dateString.substring(4, 6), 10) - 1;
    const day = parseInt(dateString.substring(6, 8), 10);
    const hours = parseInt(dateString.substring(8, 10), 10);
    const minutes = parseInt(dateString.substring(10, 12), 10);
    const seconds = parseInt(dateString.substring(12, 14), 10);

    const created_at = new Date(
      Date.UTC(year, month, day, hours, minutes, seconds)
    );

    const folio = obr.fillerOrderNumber || obr.placeOrderNumber;
    const sample_id = obr.fillerOrderNumber;

    const parameters = observations.map((o) => {
      const [min_range, max_range] = o.referenceRange?.split("-");

      const year = parseInt(o.dateTime.substring(0, 4), 10);
      const month = parseInt(o.dateTime.substring(4, 6), 10) - 1;
      const day = parseInt(o.dateTime.substring(6, 8), 10);
      const hours = parseInt(o.dateTime.substring(8, 10), 10);
      const minutes = parseInt(o.dateTime.substring(10, 12), 10);
      const seconds = parseInt(o.dateTime.substring(12, 14), 10);

      const created_at = new Date(
        Date.UTC(year, month, day, hours, minutes, seconds)
      );
      
      return {
        description: o.testName || this.formatName(o.observationIdentifier),
        value: o.value?.replace(",", "."),
        unit_measurement: o.units,
        created_at,
        min_range: min_range?.replaceAll(",", "."),
        max_range: max_range?.replaceAll(",", "."),
      };
    });

    return {
      folio,
      sample_id,
      created_at,
      parameters,
    };
  }

  static formatName(name) {
    const newName = name.split("^").at(1);
    return newName ? newName : name.replaceAll("^", " ");
  }
}

module.exports = Hl7ClinicalDataModel;
