// Tarea: Crea una función que invierta una cadena de texto.
// Tipo de función: Función recursiva

const invertirCadena = (cadena) => {
  if (cadena === "") {
    return "";
  }
  return cadena[cadena.length - 1] + invertirCadena(cadena.slice(0, -1));
}   
