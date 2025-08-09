const Hl7ParserFactory = require("../src/infra/bufferresultparser/hl7v2/Hl7ParserFactory");

const message = `
MSH|^~\&|||||20240524133800||ORU^R01|22|P|2.3.1||||0||ASCII|||
PID|22|||||||O|||||||||||||||||||||||
OBR|22||138|^|N|20240524080954|20240524080913|20240524080913||1^1||||20240524080913|Suero|||||||||||||||||||||||||||||||||
OBX|1|NM||UREA|141.520406|mg/dL|-|N|||F||141.520406|20240524081635|||0|
OBX|2|NM||Glucose (GOD-POD Method)|105.627806|mg/dL|-|N|||F||105.627806|20240524082517|||0|
OBX|3|NM||Creatinine (Sarcosine Oxidase Method)|1.228864|mg/dL|-|N|||F||1.228864|20240524082535|||0|
`

const parser =  Hl7ParserFactory.parse(message)

//console.log(parser.getObservations());
console.log(parser.getPersonalInformation());
console.log(parser.getMessageControlHeader());
console.log(parser.getObservations());
