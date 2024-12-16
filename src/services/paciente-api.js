const { stevlabApiClient } = require("./stevlab-client-api")

const getPacienteByFolioMuestra = async (folio) => {
    const response = await stevlabApiClient.get(`/ts/${folio}`);
    return response.data;
}

module.exports = { getPacienteByFolioMuestra }