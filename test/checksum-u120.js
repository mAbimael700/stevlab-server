const bl = require("bl");
const { handleBuffer } = require("../src/lib/data-handler/buffer-handler");
const options = {
  CHAR_DELIMITER: "[\\n\\r]+(?:\\s|\\*)*GLU\\s+.*?(?:\\s+.*?)?\\s*(?=[\\n\\r]+|$)",
};

const data = ` Date:21-04-2025 17:10
Operator: 01
No.010445
LEU       -              neg
NIT       -              neg
URO       -       0.2  mg/dL
PRO      +-       15   mg/dL
pH          6.0
BLO       -              neg
SG        1.030
KET       -              neg
BIL       -              neg
GLU       -              neg

Date:21-04-2025 17:06
Operator: 01
No.010444
*LEU      3+       500 Leu/uL
NIT       -              neg
URO       -       0.2  mg/dL
PRO      +-       15   mg/dL
pH          6.0
BLO      +-        10 Ery/uL
SG        1.015
KET       -              neg
BIL       -              neg
GLU       -              neg
`;
const bufferList = new bl();
bufferList.append(data)

while (true) {
  const bufferResults = handleBuffer(bufferList.toString(), options);
  
  if (bufferResults) {
    console.log(bufferResults);
    bufferList.consume(bufferResults.consumedBytes)
  } else {
    // Si no hay más mensajes completos, salir del loop
    break;
  }
}
