const {
  SpU120BufferParser,
} = require("../src/lib/parsers/SpU120BufferParser/SpU120BufferParser");

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
 GLU       -              neg`;

const parsedData = new SpU120BufferParser(data).parse();
console.log(parsedData);
