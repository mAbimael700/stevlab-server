const { app, BrowserWindow, Tray, Menu } = require("electron");
const path = require("path");
const LisServerApplication = require("./src/app/LisServerApplication");

let mainWindow;
let tray = null;

// Configura el envío de logs
const log = (type, message) => {
  if (mainWindow && mainWindow.webContents) {
    // Enviar el log con tipo, mensaje y fecha
    mainWindow.webContents.send("log", { date: new Date(), type, message });
  }
};

// Sobrescribe métodos de consola
const overrideConsole = () => {
  const methods = ["log", "warn", "info", "error", "debug"];
  
  methods.forEach((method) => {
    // Sobrescribe cada método de consola
    const original = console[method];
    console[method] = (...args) => {
      // Imprime en la consola principal
      original(...args);

      // Envía el log al frontend, uniendo los argumentos y formateándolos
      log(method, args.map(arg => (typeof arg === "object" ? JSON.stringify(arg) : String(arg))).join(" "));
    };
  });
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
  mainWindow.loadFile(path.join(__dirname, "dist", "index.html")); // Puerto del servidor Vite
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
    console.log("Ventana lista. Iniciando servidor...");
    LisServerApplication(); // Inicia el servidor después de que la ventana está lista
  });
};

app.whenReady().then(() => {
  overrideConsole(); // Sobrescribe los métodos de consola al inicio
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });

  // Interceptar el cierre de la ventana
  mainWindow.on("close", (event) => {
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
app.on("before-quit", () => {
  app.isQuitting = true;
});
