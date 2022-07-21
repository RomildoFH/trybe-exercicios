//🚀 Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false.

//Utilizando if-else
console.log("Utilizando if-else")

const a = 1;

const b = 3;

const c = 5;

if (a % 2 === 0 || b % 2 === 0 || c % 2 === 0) {
    console.log(true);
} else {
    console .log(false);
}

//Utilizando somente um if
console.log("Utilizando somente um if")

let ePar = false;

if (a % 2 === 0 || b % 2 === 0 || c % 2 === 0) {
    ePar = true;
}

console.log(ePar);

