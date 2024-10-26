const devicesAreas = {
  HORMONAS: [""],
  INMUNOLOGIA: [
    {
      id: "FINECARE_PLUS",
      name: "FINECARE PLUS",
      area: {
        ID: 44,
        Nombre_area: "BIOQUIMICA CLINICA",
      },
    },
  ],
  "BIOQUIMICA CLINICA": [
    {
      id: "FUJIFILM_DRICHEM_NX600",
      name: "FUJIFILM DRI-CHEM NX600",
      area: {
        ID: 49,
        Nombre_area: "BIOQUIMICA CLINICA",
      },
    },
    {
      id: "CONTROLAB",
      name: "CONTROLAB",
      area: {
        ID: 49,
        Nombre_area: "BIOQUIMICA CLINICA",
      },
    },
    {
      id: "CM200",
      name: "CM200",
      area: {
        ID: 49,
        Nombre_area: "BIOQUIMICA CLINICA",
      },
      require_ftp: true,
    },
    {
      id: "A15",
      name: "A15",
      area: {
        ID: 49,
        Nombre_area: "BIOQUIMICA CLINICA",
      },
    },
  ],
};

module.exports = {
  devicesAreas,
};
