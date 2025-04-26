const { BrowserWindow } = require("electron");
const path = require("path");
const { overrideConsole } = require("./src/middlewares/logger/overwrite-logger");
const { currentWorkDirectory } = require("./src/constants/CONSTANTS");
const { initializeTrayContextMenu } = require("./TrayMenu");

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"), // Preload correctamente definido
      contextIsolation: true, // Activo para seguridad
      nodeIntegration: false, // Desactivado por seguridad
    },
  });
  overrideConsole(mainWindow); // Sobrescribe los métodos de consola al inicio

  if (process.env.DEVELOPMENT === "true") {
    createDevelopmentWindow(mainWindow);
  } else {
    createProductionWindow(mainWindow)
  }
  initializeTrayContextMenu(mainWindow);
  return mainWindow
};

module.exports = { createWindow };

/**
 *
 * @param {BrowserWindow} mainWindow
 */
function createDevelopmentWindow(mainWindow) {
  const viteUrl = "http://localhost:5173";
  const fallbackFile = path.join(__dirname, "dist", "index.html");

  // Intentar cargar Vite primero
  mainWindow.loadURL(viteUrl).catch((error) => {
    console.error("No se pudo conectar al servidor Vite:", error.message);
    console.log("Intentando cargar versión de producción...");

    // Fallback al archivo built
    mainWindow.loadFile(fallbackFile).catch((fallbackError) => {
      console.error(
        "También falló al cargar el fallback:",
        fallbackError.message
      );

      // Mostrar mensaje de error en la ventana
      mainWindow.webContents.executeJavaScript(`
            document.body.innerHTML = '<div style="padding: 20px; font-family: sans-serif;">
              <h1>Error al cargar la aplicación</h1>
              <p>No se pudo conectar al servidor de desarrollo (Vite) ni cargar la versión de producción.</p>
              <p>${fallbackError.message}</p>
              <p>Verifica que el servidor de desarrollo esté corriendo o ejecuta <code>npm run build</code></p>
            </div>';
          `);
    });
  });
}

/**
 * Modo producción - cargar directamente los archivos built
 * @param {BrowserWindow} mainWindow
 */
function createProductionWindow(mainWindow) {
  mainWindow
    .loadFile(path.join(__dirname, "dist", "index.html"))
    .catch((error) => {
      console.error("Error al cargar la versión built:", error.message);
      mainWindow.webContents.executeJavaScript(`
          document.body.innerHTML = '<div style="padding: 20px; font-family: sans-serif;">
            <h1>Error al cargar la aplicación</h1>
            <p>No se pudo cargar la versión compilada de la aplicación.</p>
            <p>${error.message}</p>
          </div>';
        `);
    });
}
