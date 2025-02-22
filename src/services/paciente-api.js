const { fetchApiClient } = require("./stevlab-client-api")

const getPacienteByFolioMuestra = async (folio) => {
    console.log('FOlio----->',folio);
    
    const url = `/ts/${folio}`;
    return await fetchApiClient(url, { method: 'GET' });
}

module.exports = { getPacienteByFolioMuestra }