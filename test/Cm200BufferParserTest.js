const Cm200ClinicalDataModel = require("../src/domain/ClinicalDataModel/Cm200ClinicalDataModel");
const Cm200BufferParser = require("../src/infra/bufferparser/cm200/Cm200BufferParser");

const data = 'MARIA INES;N;JIMENEZ HDEZ        ;            ;   ; ;09/27/24;00:00:00;OK; 6;COLL  ;      344;mg/dL;CREL  ;   0.5295;mg/dL;GLUL  ;    258.9;mg/dL;TGL   ;      249;mg/dL;UREL  ;    34.11;mg/dL;URIL  ;    3.875;mg/dL'

console.log(JSON.stringify(Cm200ClinicalDataModel.transform(data), null, 2));
