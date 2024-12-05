const { app, BrowserWindow } = require("electron");
const path = require("path");
const lisServerApplication = require("./src/app");


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

   mainWindow.loadURL("http://localhost:4000"); // Puerto del servidor Vite
  //mainWindow.loadFile(path.join(__dirname, "index.html"));
};

lisServerApplication()
app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});


