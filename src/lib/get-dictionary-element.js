export function getElementoKey({diccionario, elemento}) {
    return diccionario[elemento] || null; // Retorna null si no se encuentra la clave
}