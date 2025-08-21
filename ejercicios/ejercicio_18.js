// Tarea: Crea una función que valide si una cadena es un correo electrónico básico (contiene @ y .com).
// Tipo de función: Declaración de función

function validarEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}   
