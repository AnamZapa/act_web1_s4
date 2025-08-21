// Tarea: Crea una función que multiplique todos los números de un arreglo.
// Tipo de función: Función de orden superior

const multiplicarNumeros = (arreglo) => {
  return arreglo.reduce((acumulador, numero) => acumulador * numero, 1);
}   
