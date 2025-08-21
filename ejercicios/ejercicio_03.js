// Tarea: Crea una función que sume todos los números de un arreglo.
// Tipo de función: Función flecha

const sumarNumeros = (numeros) => {
    return numeros.reduce((acumulador, numero) => acumulador + numero, 0);
}   
