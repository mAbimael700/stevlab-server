const { app, BrowserWindow } = require("electron");
const path = require("path");
const lisServerApplication = require("./src/app");
const { cwd } = require("process");

let mainWindow;

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

  mainWindow.loadFile(
    path.join(__dirname, "dist", "index.html")
  ); // Puerto del servidor Vite

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
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
