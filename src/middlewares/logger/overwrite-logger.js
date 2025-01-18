// Configura el envío de logs
const log = (mainWindow, type, message) => {
    if (mainWindow && mainWindow.webContents && !mainWindow.isDestroyed()) {
        mainWindow.webContents.send("log", { date: new Date(), type, message });
    }
};

// Sobrescribe métodos de consola
const overrideConsole = (mainWindow) => {
    if (!mainWindow || !mainWindow.webContents || mainWindow.isDestroyed()) {
        console.error("No se pudo sobrescribir la consola: mainWindow no es válido o está destruido.");
        return;
    }

    // Referencia a los métodos originales de la consola
    const originalConsole = {};
    const methods = ["log", "warn", "info", "error", "debug"];

    methods.forEach((method) => {
        // Guarda el método original
        originalConsole[method] = console[method];

        // Sobrescribe el método
        console[method] = (...args) => {
            // Imprime en la consola principal
            originalConsole[method](...args);

            // Envía el log al frontend
            const formattedMessage = args.map(arg => {
                if (typeof arg === "object") {
                    return JSON.stringify(arg, null, 2); // Formato más legible para objetos
                }
                return String(arg);
            }).join(" ");

            log(mainWindow, method, formattedMessage);
        };
    });

    // Proporciona un método para restaurar los métodos originales
    console.restoreOriginalConsole = () => {
        methods.forEach((method) => {
            if (originalConsole[method]) {
                console[method] = originalConsole[method];
            }
        });
        console.log("Métodos originales de consola restaurados.");
    };
};

module.exports = {
    overrideConsole,
};
