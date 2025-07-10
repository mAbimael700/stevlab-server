const { createLogger, format, transports } = require('winston');
const DailyRotateFile = require('winston-daily-rotate-file');

const path = require('path');
const { LOG_DIR } = require('../../constants/LOG_DIR');

// Crea una instancia del logger de Winston
const logger = createLogger({
    level: 'info', // Puedes usar niveles como 'info', 'warn', 'error'
    format: format.combine(
        format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        format.errors({ stack: true }),
        format.splat(),
        format.json() // Guarda los logs en formato JSON para fácil análisis
    ),
    transports: [
        // Transport para registrar errores en un archivo separado

        new DailyRotateFile({
            filename: path.join(LOG_DIR, 'error-%DATE%.log'),
            datePattern: 'YYYY-MM-DD',
            maxSize: '20m', // Tamaño máximo del archivo de log antes de rotarlo
            maxFiles: '14d' // Guardar logs por 14 días
        }),
        // Transport para registrar todo tipo de eventos
        new transports.File({ filename: path.join(LOG_DIR, 'combined.log') })
    ],
});

// Si estás en desarrollo, también puedes registrar en la consola
if (process.env.NODE_ENV !== 'production') {
    logger.add(new transports.Console({
        format: format.simple(),
    }));
}

module.exports = logger;
