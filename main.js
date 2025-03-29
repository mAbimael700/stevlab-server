const { app, BrowserWindow, Tray, Menu } = require("electron");
const path = require("path");
const LisServerApplication = require("./src/app/LisServerApplication");
const {
  overrideConsole,
} = require("./src/middlewares/logger/overwrite-logger");

// run this as early in the main process as possible
if (require('electron-squirrel-startup')) app.quit();

let mainWindow;
let tray = null;

const createWindow = () => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"), // Preload correctamente definido
      contextIsolation: true, // Activo para seguridad
      nodeIntegration: false, // Desactivado por seguridad
    },
  });

  overrideConsole(mainWindow); // Sobrescribe los métodos de consola al inicio

  if (process.env.DEVELOPMENT == "true") {
    mainWindow.loadURL("http://localhost:5173")/* .catch((e) => {
      console.error("Hubo un error al cargar la interfaz de usuario", e.message)
      mainWindow.loadFile(path.join(__dirname, "dist", "index.html")); // Build del cliente React  
    } 
    ); // Puerto del servidor Vite*/
  } else {
    mainWindow.loadFile(path.join(__dirname, "dist", "index.html")); // Build del cliente React
  }

  tray = new Tray(path.join(__dirname, "icon.ico")); // Cambia al icono que desees usar

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

  // Espera a que la ventana esté lista para mostrar
  mainWindow.once("ready-to-show", () => {
    console.log("Ventana lista.");
  });
};

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
    createWindow();

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
