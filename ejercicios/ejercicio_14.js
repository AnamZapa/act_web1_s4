// Tarea: Crea una función que genere un ID único basado en un contador interno.
// Tipo de función: IIFE con closure

const generadorID = (() => {
  let contador = 0;

  return function() {
    contador++;
    return `ID-${contador}`;
  };
}   )();    

