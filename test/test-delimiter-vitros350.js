
function parseMessages(data) {
    const regex = /!000a[\s\S]*?(?=!000a|$)/g; // Divide por bloques empezando por !000a
    return data.split(regex);
}

function dividirMensajes(input) {
    // Expresión regular para capturar cada mensaje completo
    const regex = /!000a[\s\S]*?!\d{3}h[^\n\r]*/g;
    // Extraer coincidencias en un array
    const mensajes = input.match(regex);
    return mensajes || [];
}

function parseMessage(message) {

    const parametroRegex = /!(\d{3}[fh])([A-Za-z+]+)\s+([\d.]+)\s+([\w/%]+)\s+([A-Za-z0-9]+)/;
    const lines = message.split("\n").filter((line) => line.trim() !== "");
    let currentResult = null;

    for (const line of lines) {
        if (line.startsWith("!000a")) {
            // Parse header line
            const header = line.split(" ").filter(e => e.trim() !== '');
            // Desglosamos la cadena
            const hourMinuteSecond = header[1].slice(0, 6);  // '165313' -> hora, minutos y segundos
            const yearMonthDay = header[1].slice(6);  // '241218' -> año, mes y día
            const id = header[1].slice(12)
            const folio = id
            // Formateamos y construimos la fecha
            const timestamp = new Date()

            currentResult = {
                tipo: "R",
                id,
                folio,
                fecha: timestamp,
                parametros: [],
                chart: [],
            };
        } else if (parametroRegex.test(line)) {
            // Parse parameter lines
            const parts = line
                .match(/!(\d{3}[fh])([A-Za-z+]+)\s+([\d.]+)\s+([\w/%]+)\s+([A-Za-z0-9]+)/);
            if (parts) {
                const clave = parts[2];
                const valor = parts[3];
                const unidad_medida = parts[4];
                currentResult.parametros.push({
                    clave,
                    clave_sistema: null,
                    nombre: clave,
                    valor,
                    unidad_medida,
                });
            }
        } else if (line.startsWith("!001c")) {
            // Parse patient info
            const nameParts = line.match(/!001c([A-Za-z\s]+)/);
            if (nameParts) {
                const pacientInfo = nameParts[1].trim().split(" ").filter(e => e.trim() !== '');
                currentResult.nombre_paciente = pacientInfo.join(" ")
                currentResult.sexo = pacientInfo[-1]; // Default value
            }
        }
    }

    return currentResult
}

const input = `
!000a0200001552  1554542412181155           11 1               FF01.000  55
!001fGLU   316.  mg/dL   12DE
!002h0000DB
!000a0200011552  1614302412181155           11 1               FF01.000  4D
!001fGLU   316.  mg/dL   12DE
!002h0001DC
!000a0200021552  1622462412181076           11 1               FF01.000  56
!001fGLU   174.  mg/dL   12E0
!002h0002DD
!000a0200031552  1630502412181074           11 1               FF01.000  4F
!001cGERARDO        OROZCO         ALBARRAN                                               M35      AD
!002fGLU    95.  mg/dL   00D0
!003h0003DF
!000a0200041552  1644582412181074           11 1               FF01.000  5D
!001fNa+   127.  mmol/L  222E
!002fGLU    94.  mg/dL   00CF
!003fTRIG  297.  mg/dL   1216
!004fK+      4.5 mmol/L  00D8
!005fUREA  155.1 mg/dL   1219
!006fCHOL  195.  mg/dL   0003
!007fCl-   108.  mmol/L  1234
!008fCREA    5.7 mg/dL   12EA
!009fCa      8.2 mg/dL   22B3
!010fURIC   11.2 mg/dL   1203
!011fPHOS    5.8 mg/dL   1204
!012h0004E0
!000a0200051552  1652192412181076           11 2               FF01.000  5D
!001fGLU   174.  mg/dL   12E0
!002fUREA   83.4 mg/dL   1209
!003fCREA    5.0 mg/dL   12DE
!004h0005E2
!000a0200061552  1653132412181155           11 3               FF01.000  58
!001fGLU   314.  mg/dL   12DC
!002fTRIG  126.  mg/dL   0009
!003fUREA   28.6 mg/dL   0008
!004fCHOL  203.  mg/dL   12FA
!005fCREA     .2 mg/dL   22CE
!006fURIC    2.6 mg/dL   00F9
!007h0006E6
!000a0200071552  1654532412181074           11 4               FF01.000  5F
!001fTP      4.1 g/dL    2259
!002fBu       .2 mg/dL   00A3
!003fAST    14.  U/L     2229
!004fALKP   65.  U/L     004C
!005fALB     2.1 g/dL    2266
!006fBc      0.0 mg/dL   G3BD
!007fALTV   38.  U/L     005E
!008fGGT    33.  U/L     0025
!009fTBIL     .5 mg/dL   00E1
!010fLDH   299.  U/L     2236
!011h0007E2
`;
const resultados = dividirMensajes(input);


resultados.forEach(resultado => {
    console.log(JSON.stringify(parseMessage(resultado), null, 2));

});