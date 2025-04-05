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

  if (process.env.DEVELOPMENT === "true") {
    const viteUrl = "http://localhost:5173";
    const fallbackFile = path.join(__dirname, "dist", "index.html");
    
    // Intentar cargar Vite primero
    mainWindow.loadURL(viteUrl).catch((error) => {
      console.error("No se pudo conectar al servidor Vite:", error.message);
      console.log("Intentando cargar versión de producción...");
      
      // Fallback al archivo built
      mainWindow.loadFile(fallbackFile).catch((fallbackError) => {
        console.error("También falló al cargar el fallback:", fallbackError.message);
        
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
  } else {
    // Modo producción - cargar directamente los archivos built
    mainWindow.loadFile(path.join(__dirname, "dist", "index.html")).catch((error) => {
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
