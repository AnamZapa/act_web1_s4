// Tarea: Crea una función que calcule el promedio de un arreglo de números.
// Tipo de función: Función flecha

const calcularPromedio = (numeros) => {
  if (numeros.length === 0) return 0;
  const suma = numeros.reduce((acumulador, numeroActual) => acumulador + numeroActual, 0);
  return suma / numeros.length;
}   
