//4- Um número primo é um número inteiro maior do que 1 que possui somente dois divisores, ou seja, é divisível por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 2 e 50.

//Resolução errada, abaixo foram contados os números primos, porém vou manter por conhecimento. A questão pede o MAIOR NÚMERO PRIMO no intervalo, e não a quantidade.

let numero = 50;

let inicial = 2;

let divisores = 0;

let numerosPrimos = 0;

for (var index = inicial; index <= numero; index ++){
    divisores = 0;
    for(var contador = 1; contador <= index; contador ++){
        if (index % contador === 0){
            divisores += 1;
        }
    } if (divisores === 2){
        numerosPrimos += 1;
    }
}

console.log("Entre " + inicial + " e " + numero + " temos " + numerosPrimos + " números primos.");
console.log("Essa não é a resposta que é solicitada na questão.");
console.log("--------------------");


//----------------------------------------------------------------------------------------------//
//Iniciando a resolução correta da questão


let valorMaximo = 50;

let valorInicial = 2;

let quantidadeDivisores = 0;

let arrayPrimos = [];

let maiorPrimo = 1;

for (var numeroAtual = valorInicial; numeroAtual <= valorMaximo; numeroAtual ++){
    quantidadeDivisores = 0;
    for(var divisorAtual = 1; divisorAtual <= numeroAtual; divisorAtual ++){
        if (numeroAtual % divisorAtual === 0){
            quantidadeDivisores += 1;
        }
    } if (quantidadeDivisores === 2){
        numerosPrimos += 1;
        arrayPrimos.push(numeroAtual);
    }
}

for (var n = 1; n <= arrayPrimos.length; n ++){
    if (maiorPrimo < arrayPrimos[n]){
        maiorPrimo = arrayPrimos[n];
    }

}

console.log("O maior número primo entre " + valorInicial + " e " + valorMaximo + " é: " + maiorPrimo);
console.log("Essa é a resposta correta para a questão")