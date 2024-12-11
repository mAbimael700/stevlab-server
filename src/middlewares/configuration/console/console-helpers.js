const ref = require('ref-napi');
const SysTray = require('systray').default;

function disableQuickEditModenWin(kernel) {
    const STD_INPUT_HANDLE = -10; // Identificador del modo de entrada estándar
    const ENABLE_QUICK_EDIT_MODE = 0x0040; // Modo de edición rápida
    const ENABLE_EXTENDED_FLAGS = 0x0080; // Extender los flags para SetConsoleMode

    // Obtener el identificador de la consola
    const handle = kernel.GetStdHandle(STD_INPUT_HANDLE);
    if (handle) {
        const modeRef = ref.alloc('uint'); // Crear referencia para almacenar el modo actual
        if (kernel.GetConsoleMode(handle, modeRef)) {
            let mode = modeRef.deref(); // Leer el valor del modo actual
            mode &= ~ENABLE_QUICK_EDIT_MODE; // Desactivar Quick Edit Mode
            mode |= ENABLE_EXTENDED_FLAGS; // Asegurarse de habilitar las banderas extendidas
            kernel.SetConsoleMode(handle, mode); // Establecer el nuevo modo
            //console.log('Quick Edit Mode desactivado.');
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
        exec('echo off | mode con: cols=100 lines=25', (err) => {
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
            console.log('Cerrando el servidor LIS...');
            process.exit();
        }
    });
}


// Función para mostrar u ocultar la consola
function setConsoleVisibility(kernel, user, visible) {
    const consoleWindow = kernel.GetConsoleWindow();
    if (!consoleWindow.isNull()) {
        user.ShowWindow(consoleWindow, visible ? SW_SHOW : SW_HIDE);
    }
}


function systrayManager(kernel, user) {
    const systray = new SysTray({
        menu: {
            icon: '<base64 image string>', // Reemplaza con el icono en formato base64
            title: 'Stevlab Lis Server',
            tooltip: 'Servidor corriendo',
            items: [
                {
                    title: 'Mostrar Consola',
                    tooltip: 'Muestra la consola principal',
                    checked: false,
                    enabled: true,
                },
                {
                    title: 'Ocultar Consola',
                    tooltip: 'Oculta la consola principal',
                    checked: false,
                    enabled: true,
                },
                {
                    title: 'Salir',
                    tooltip: 'Cierra la aplicación',
                    checked: false,
                    enabled: true,
                },
            ],
        },
        debug: false,
        copyDir: true,
    });

    systray.onClick(action => {
        if (action.seq_id === 0) {
            console.log('Mostrando consola...');
            setConsoleVisibility(kernel, user, true);
        } else if (action.seq_id === 1) {
            console.log('Ocultando consola...');
            setConsoleVisibility(kernel, user, false);
        } else if (action.seq_id === 2) {
            console.log('Cerrando el servidor LIS...');
            systray.kill();
            process.exit();
        }
    });
}

module.exports = {
    systrayManager,
    disableQuickEditModenWin,
    emulateConsole
}