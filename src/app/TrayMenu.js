const { Tray, Menu, app, BrowserWindow } = require("electron");
const path = require("node:path");
const { currentWorkDirectory } = require("../constants/CONSTANTS");

/**
 *
 * @param {BrowserWindow} mainWindow
 */
function initializeTrayContextMenu(mainWindow) {
  let tray = null;
  tray = new Tray(path.join(currentWorkDirectory, "icon.ico")); // Cambia al icono que desees usar

  // Crear un menú contextual para la bandeja
  const contextMenu = Menu.buildFromTemplate([
    {
      label: "Mostrar ventana",
      click: () => {
        mainWindow.show();
      },
    },
    {
      label: "Salir",
      click: () => {
        app.quit();
      },
    },
  ]);

  tray.setToolTip("Stevlab - Interfaz LIS ");
  tray.setContextMenu(contextMenu);

  // Evento al hacer clic en el ícono de la bandeja
  tray.on("click", () => {
    mainWindow.isVisible() ? mainWindow.hide() : mainWindow.show();
  });
}

module.exports = { initializeTrayContextMenu };
