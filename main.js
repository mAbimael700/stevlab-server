const { app, BrowserWindow, Tray, Menu } = require("electron");
const path = require("path");
const lisServerApplication = require("./src/app");

let mainWindow;
let tray = null
// Configura el envío de logs
const log = (message) => {
  if (mainWindow && mainWindow.webContents) {
    mainWindow.webContents.send("log", message);
  }
};

// Sobrescribe `console.log` para reenviar mensajes a la ventana render
const originalLog = console.log;
console.log = (...args) => {
  originalLog(...args); // Imprime en la consola principal
  log(args.join(" ")); // Envía al frontend
};

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


  console.log( path.join(__dirname, "dist", "index.html"));
  
  mainWindow.loadFile(
    path.join(__dirname, "dist", "index.html")
  ); // Puerto del servidor Vite

  tray = new Tray(path.join(__dirname, "icon.ico")); // Cambia al icono que desees usar

  // Crear un menú contextual para la bandeja
  const contextMenu = Menu.buildFromTemplate([
    {
      label: 'Mostrar ventana',
      click: () => {
        mainWindow.show();
      },
    },
    {
      label: 'Salir',
      click: () => {
        app.quit();
      },
    },
  ]);

  tray.setToolTip('Stevlab - Interfaz LIS ');
  tray.setContextMenu(contextMenu);

  // Evento al hacer clic en el ícono de la bandeja
  tray.on('click', () => {
    mainWindow.isVisible() ? mainWindow.hide() : mainWindow.show();
  });

  // Espera a que la ventana esté lista para mostrar
  mainWindow.once("ready-to-show", () => {
    console.log("Ventana lista. Iniciando servidor...");
    lisServerApplication(); // Inicia el servidor después de que la ventana está lista
  });
};


app.whenReady().then(() => {
  createWindow();
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });


  // Interceptar el cierre de la ventana
  mainWindow.on('close', (event) => {
    if (!app.isQuitting) {
      event.preventDefault(); // Evitar el cierre
      mainWindow.hide(); // Ocultar la ventana
    }
  });

});




app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});



// Cerrar la aplicación correctamente cuando el usuario elige "Salir"
app.on('before-quit', () => {
  app.isQuitting = true;
});