const valores = {
    1: "piedra",
    2: "papel",
    3: "tijeras",
};

function assert(usuario, ai) {
    if (usuario === ai) {
        console.log("Empate");
    } else if (usuario === valores["1"] && ai === valores["3"]) {
        console.log("Usuario gana");
    } else if (usuario === valores["1"] && ai === valores["2"]) {
        console.log("AI gana");
    } else if (usuario === valores["2"] && ai === valores["1"]) {
        console.log("Usuario gana");
    } else if (usuario === valores["2"] && ai === valores["3"]) {
        console.log("AI gana");
    } else if (usuario === valores["3"] && ai === valores["1"]) {
        console.log("AI gana");
    } else if (usuario === valores["3"] && ai === valores["2"]) {
        console.log("Usuario gana");
    } else {
        console.log(usuario, ai);
    }
}

const ai = valores[parseInt(Math.random() * (4 - 1) + 1)];
let usuario = prompt('Seleccione... Piedra=1, Papel=2, Tijeras=3 :')
usuario = valores[usuario]
console.log("Seleccionaste", usuario)
console.log("AI eligio", ai)

assert(usuario, ai);
