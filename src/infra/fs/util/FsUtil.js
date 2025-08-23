const fs = require("node:fs");
const path = require("node:path");

class FsUtil {

  static ensureDirectoryExists(dirPath) {
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }
  }

  static writeJsonToFile(filePath, jsonData) {
    fs.writeFileSync(
      path.join(filePath),
      JSON.stringify(jsonData, null, 2),
      "utf8"
    );
  }

  static existsPath(filePath) {
    return fs.existsSync(filePath);
  }

  static readJsonFromFile(filePath) {
    if (!FsUtil.existsPath(filePath)) {
      throw new Error(`File not found: ${filePath}`);
    }

    const data = fs.readFileSync(filePath, "utf8");
    return JSON.parse(data);
  }
}

module.exports = FsUtil;
