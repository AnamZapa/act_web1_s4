// Tarea: Crea una función que calcule el factorial de un número.
// Tipo de función: Función recursiva

const calcularFactorial = (n) => {
  if (n <= 1) {
    return 1;
  }
  return n * calcularFactorial(n - 1);
}   