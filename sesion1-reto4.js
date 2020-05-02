function contarNumeros(maximo) {
    for(let i=1; i <= maximo; i++) {
        tipo = ((i%2) === 0) ? 'par' : 'impar'
        console.log(`${i} es ${tipo}`)
    }
}

contarNumeros(10)