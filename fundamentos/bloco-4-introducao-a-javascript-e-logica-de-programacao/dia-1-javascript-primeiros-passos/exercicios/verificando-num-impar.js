//🚀 Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false.

//Utilizando if-else
console.log("Utilizando if-else")

const a = 2;

const b = 4;

const c = 6;

if (a % 2 != 0 || b % 2 != 0 || c % 2 != 0) {
    console.log(true);
} else {
    console .log(false);
}

//Utilizando somente um if
console.log("Utilizando somente um if")

let eImpar = false;

if (a % 2 != 0 || b % 2 != 0 || c % 2 != 0) {
    eImpar = true;
}

console.log(eImpar);

