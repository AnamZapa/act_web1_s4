// Tarea: Crea una función que devuelva otra función para contar incrementos, manteniendo el contador privado.
// Tipo de función: IIFE con closure

const contador = (() => {
  let cuenta = 0; 

  return function() {
    cuenta++; 
    return cuenta; 
  };
}   )();
