const { parser } = require("../src/lib/parsers/Vitros350/parser")

const d = `!000a0200031552  1630502412181074           11 1               FF01.000  4
!001cGERARDO        OROZCO         ALBARRAN                                               M35      AD
!002fGLU    95.  mg/dL   00D0
!002fCREA    95.  mg/dL   00D0
!002fUREA    95.  mg/dL   00D0
!003h0003DF`

//console.log(d.search("!\\d{3}h\\d{4}[A-F0-9]{2}"));
 

console.log(JSON.stringify(parser(d), null, 2));
 