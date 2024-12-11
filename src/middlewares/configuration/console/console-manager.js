const ffi = require('ffi-napi');
const { emulateConsole, disableQuickEditModenWin, systrayManager} = require('./console-helpers');

function consoleManager() {

    // Cargar la biblioteca kernel32.dll
    const kernel32 = ffi.Library('kernel32', {
        'GetConsoleMode': ['bool', ['pointer', 'pointer']],
        'SetConsoleMode': ['bool', ['pointer', 'uint']],
        'GetStdHandle': ['pointer', ['int']]
    });

    const user32 = ffi.Library('user32', {
        ShowWindow: ['bool', ['pointer', 'int']],
    });

    emulateConsole()
    disableQuickEditModenWin(kernel32)
    systrayManager(kernel32, user32)
}




module.exports = { consoleManager }