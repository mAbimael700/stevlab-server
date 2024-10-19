const multer = require("multer");
const { FILE_UPLOADS_DIR } = require("../constants/CONFIG_DIR");
const { format } = require("date-fns");

function MulterInitializer() {
  // Configuración de multer para almacenar archivos
  /* const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, FILE_UPLOADS_DIR); // Directorio de destino
    },
    filename: function (req, file, cb) {
      cb(null, `${format(new Date(), "ddMMyyyy-HHmmss")}-${file.originalname}`); // Nombre único para el archivo
    },
  }); */

  const storage = multer.memoryStorage();

  // Inicializamos multer
  const upload = multer({ storage: storage });

  return upload;
}

module.exports = {
  MulterInitializer,
};
