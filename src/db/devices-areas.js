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
      id: "MINDRAY_BS120",
      name: "MINDRAY BS-120",
      area: {
        ID: 49,
        Nombre_area: "BIOQUIMICA CLINICA",
      },
    },
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
      require_ftp_conn: true,
    },
    {
      id: "A15",
      name: "A15",
      area: {
        ID: 49,
        Nombre_area: "BIOQUIMICA CLINICA",
      },
      require_ftp_conn: true,
    },
    {
      id: "VITROS_350",
      name: "VITROS 350",
      area: {
        ID: 49,
        Nombre_area: "BIOQUIMICA CLINICA",
      },
      require_serial_conn: true,
    },
  ],
  HEMATOLOGIA: [
    {
      id: "MINDRAY_BC20S",
      name: "MINDRAY BC-20S",
      area: {
        ID: 4,
        Nombre_area: "HEMATOLOGIA",
      },
      require_tcp_server_conn: true,
    },
    {
      id: "SWELAB_ALFA",
      name: "SWELAB ALFA",
      area: {
        ID: 4,
        Nombre_area: "HEMATOLOGIA",
      },
      require_serial_conn: true,
    },
    {
      id: "SWELAB_LUMI",
      name: "SWELAB LUMI",
      area: {
        ID: 4,
        Nombre_area: "HEMATOLOGIA",
      },
    },
    {
      id: "DYMIND",
      name: "DYMIND",
      area: {
        ID: 4,
        Nombre_area: "HEMATOLOGIA",
      },
    },
  ],
};


function getDevicesAreas() {
  return Object.values(devicesAreas).flat()
}

module.exports = {
  devicesAreas,
  getDevicesAreas
};
