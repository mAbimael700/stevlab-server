const { create } = require('xmlbuilder2');
const { generateAckDate } = require('../generate-ack-date');


/**
 * Función para generar el mensaje ACK en formato XML
 * @param {string} id 
 * @param {string} seq 
 * @returns {string} XLM ACK
 */
function generateAck(id, seq, status = 'AA') {
    const timestamp = generateAckDate()
    const doc = create({ version: '1.0', encoding: 'UTF-8' })
      .ele('ACK')
        .ele('status').txt(status).up() // Cambiar a 'AE' o 'AR' si es necesario
        .ele('message')
          .ele('id').txt(id).up()
          .ele('seq').txt(seq).up()
        .up()
        .ele('timestamp').txt(timestamp).up()
      .up();
    return doc.end({ prettyPrint: true });
  }

  module.exports = {generateAck}