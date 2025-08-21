// Tarea: Crea una función que imprima un mensaje después de un tiempo definido por el usuario.
// Tipo de función: Función anónima con setTimeout

const imprimirMensajeConTiempo = (mensaje, tiempo) => {
  setTimeout(() => {
    console.log(mensaje);
  }, tiempo);
}
