const holamundo = 'Hola mundo'
const numero = 10.5
const boolean = false
const indefinido = undefined
const nulo = null

const lista = [1, 2, 3, 4, 5]
const objeto = {
    clave1: "valor1",
    key2: "value2",
}
function say_hello_function(nombre) {
    return `Hola ${nombre}`
}
const say_hello_anonymous = function(nombre) {
    return `Hola ${nombre}`
}
const say_hello_arrow = (nombre) => {
    return `Hola ${nombre}`
}
const today = new Date();

console.log(holamundo)
console.log(numero)
console.log(boolean)
console.log(indefinido)
console.log(nulo)
console.log(lista)
console.log(objeto)
console.log(say_hello_function('Hector'))
console.log(say_hello_anonymous('Carlos'))
console.log(say_hello_arrow('Luis'))
console.log("Hoy es", today)