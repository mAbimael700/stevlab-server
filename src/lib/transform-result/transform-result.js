const { getPacienteByFolioMuestra } = require("../../services/paciente-api");

/**
 * Función para manejar errores de la API
 * @param {string} folio
 * @returns
 */
async function fetchPacienteData(folio) {
    try {
      const { recepcions } = await getPacienteByFolioMuestra(folio.slice(7));
  
      if (!recepcions) {
        throw new Error(
          `Datos de recepción no encontrados para el folio ${folio}`
        );
      }
      const data = Object.values(recepcions).map((e) => e)[0];    
      return data;
    } catch (error) {
      console.error(`Error al obtener datos del paciente: ${error.message}`);
      return null; // Devuelve null si falla
    }
  }

  // Función para transformar datos
async function transformData(obj) {
    const { folio } = obj;
    const data = await fetchPacienteData(folio);
  
    if (!data) {
      throw new Error(
        "No se pudieron transformar los datos por falta de información"
      );
    }
  
    const { recepcion, paciente: p, areas: a, estudios: e, analitos } = data;
  
    const [paciente] = p;
    const [areas] = a;
    const [estudios] = e;
  
    return {
      ...obj,
      paciente: {
        nombre: paciente.paciente,
        edad: parseInt(paciente.edad),
        sexo: paciente.sexo,
        fecha_nacimiento: paciente.nacimiento,
      },
      area: areas.descripcion,
      estudio: {
        clave: estudios.clave,
        descripcion: estudios.descripcion,
      },
      parametros: obj.parametros.map((param) => {
        const analito = analitos.find((a) => a.clave === param.nombre);
        return {
          ...param,
          descripcion: analito ? analito.descripcion : param.descripcion,
        };
      }),
    };
  }

  module.exports = {
    transformData
  }