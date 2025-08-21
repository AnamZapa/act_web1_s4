// Tarea: Crea una función que cuente las vocales (a, e, i, o, u) en una cadena.
// Tipo de función: Función recursiva

function contarVocales(cadena) {
    
    if (cadena.length === 0) {
        return 0;
    }

    const primeraLetra = cadena[0].toLowerCase();
    const esVocal = 'aeiou'.includes(primeraLetra);

    return (esVocal ? 1 : 0) + contarVocales(cadena.slice(1));
}
