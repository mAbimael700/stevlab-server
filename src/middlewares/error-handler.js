
const logger = require('../lib/error-handler/logger');

function ErrorHandler() {

    process.on("uncaughtException", (err) => {
        logger.error('Se produjo una excepción no controlada:', { message: err.message, stack: err.stack, });
        console.log(err);

        console.error('Se ha producido una excepción no controlada:', err);
        // Aquí puedes reiniciar la aplicación o decidir si continuar
    })

    // Manejo global de promesas no gestionadas
    process.on('unhandledRejection', async (reason, promise) => {
        console.error('Promesa no gestionada:', await promise, 'Razón:', await reason);
        // Si no llamas a process.exit(), la aplicación sigue ejecutándose.
        logger.error('Promesa no gestionada: %s', reason.stack || reason);

    });

    // Registra eventos normales en tu código
    logger.info('La aplicación ha iniciado correctamente.');
}

module.exports = {
    ErrorHandler
}