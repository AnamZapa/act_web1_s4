// Tarea: Crea una función que salude a una persona por su nombre. Si no se proporciona un nombre, usa "Invitado".
// Tipo de función: Expresión de función

const saludar = function(nombre = "Invitado") {
    return `¡Hola, ${nombre}!`;
}