const multer = require("multer");
const { FILE_UPLOADS_DIR } = require("../constants/CONFIG_DIR");
const { format } = require("date-fns");

function MulterInitializer() {
  const storage = multer.memoryStorage();

  // Inicializamos multer
  const upload = multer({ storage: storage });

  return upload;
}

module.exports = {
  MulterInitializer,
};
