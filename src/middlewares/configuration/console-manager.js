const ffi = require('ffi-napi');
const ref = require('ref-napi');

function disableQuickEditModenWin() {
    // Cargar la biblioteca kernel32.dll
    const kernel32 = ffi.Library('kernel32', {
        'GetConsoleMode': ['bool', ['pointer', 'pointer']],
        'SetConsoleMode': ['bool', ['pointer', 'uint']],
        'GetStdHandle': ['pointer', ['int']]
    });

    const STD_INPUT_HANDLE = -10; // Identificador del modo de entrada estándar
    const ENABLE_QUICK_EDIT_MODE = 0x0040; // Modo de edición rápida
    const ENABLE_EXTENDED_FLAGS = 0x0080; // Extender los flags para SetConsoleMode

    // Obtener el identificador de la consola
    const handle = kernel32.GetStdHandle(STD_INPUT_HANDLE);
    if (handle) {
        const modeRef = ref.alloc('uint'); // Crear referencia para almacenar el modo actual
        if (kernel32.GetConsoleMode(handle, modeRef)) {
            let mode = modeRef.deref(); // Leer el valor del modo actual
            mode &= ~ENABLE_QUICK_EDIT_MODE; // Desactivar Quick Edit Mode
            mode |= ENABLE_EXTENDED_FLAGS; // Asegurarse de habilitar las banderas extendidas
            kernel32.SetConsoleMode(handle, mode); // Establecer el nuevo modo
            console.log('Quick Edit Mode desactivado.');
        } else {
            console.error('No se pudo obtener el modo de consola.');
        }
    } else {
        console.error('No se pudo obtener el manejador de consola.');
    }
}


function emulateConsole() {
    // Detectar plataforma
    if (process.platform === 'win32') {
        // Usar API moderna para deshabilitar Quick Edit en la consola
        const { exec } = require('child_process');

        // Ejecutar comando para deshabilitar "Quick Edit" en Windows
        exec('echo off | mode con: cols=80 lines=25', (err) => {
            if (err) {
                console.error('No se pudo configurar la consola:', err);
            }
        });
    }

    // Evitar que el programa se cierre con señales
    process.stdin.setRawMode(true);
    process.stdin.resume();
    process.stdin.on('data', data => {
        if (data.toString() === '\u0003') { // Ctrl+C
            console.log('Saliendo...');
            process.exit();
        }
    });
}

function consoleManager() {

    emulateConsole()
    disableQuickEditModenWin()


}

module.exports = { consoleManager }