// Tarea: Crea una función que sume un número variable de argumentos.
// Tipo de función: Función flecha con parámetro rest

const sumarNumeros = (...numeros) => {
  return numeros.reduce((acumulador, numeroActual) => acumulador + numeroActual, 0);
}   
