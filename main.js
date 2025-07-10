const { app, BrowserWindow } = require("electron");
const LisServerApplication = require("./src/app/LisServerApplication");
const { createWindow } = require("./CreateWindow");
// run this as early in the main process as possible
if (require("electron-squirrel-startup")) app.quit();

let mainWindow;
const gotTheLock = app.requestSingleInstanceLock();

if (!gotTheLock) {
  app.quit(); // Salir si ya hay otra instancia corriendo
} else {
  app.on("second-instance", (event, commandLine, workingDirectory) => {
    // Si otra instancia se inicia, muestra la ventana principal
    if (mainWindow) {
      if (mainWindow.isMinimized()) mainWindow.restore();
      mainWindow.focus();
    }
  });

  app.whenReady().then(() => {
    mainWindow = createWindow();

    // Asegúrate de que los servicios solo se inicializan una vez
    if (!global.servicesInitialized) {
      global.servicesInitialized = true; // Marca los servicios como inicializados
      LisServerApplication(); // Inicia los servicios del servidor
    }

    app.on("activate", () => {
      if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
      }
    });

    // Interceptar el cierre de la ventana
    if (mainWindow) {
      mainWindow.on("close", (event) => {
        if (!app.isQuitting) {
          event.preventDefault(); // Evitar el cierre
          mainWindow.hide(); // Ocultar la ventana
        }
      });
    }
  });
}

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

// Cerrar la aplicación correctamente cuando el usuario elige "Salir"
app.on("before-quit", () => {
  app.isQuitting = true;
});
