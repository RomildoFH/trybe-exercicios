// 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
// Array de teste: [2, 3, 6, 7, 10, 1];.
// Valor esperado no retorno da função: 4.

function posicaoMaiorNum (arr) {

let maiorValor = arr[0];

for (atual = 1; atual < arr.length; atual ++){
    if (arr[atual] > maiorValor){
        maiorValor = arr[atual];
    }
    
}
let posicao = arr.indexOf(maiorValor);
console.log(maiorValor);
console.log(posicao);
}

posicaoMaiorNum ([2, 3, 6, 7, 10, 1]);
console.log("-------------------");

// 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
// Array de teste: [2, 4, 6, 7, 10, 0, -3];.
// Valor esperado no retorno da função: 6.

function posicaoMenorNum (array) {

    let menorValor = array[0];
    
    for (atual = 1; atual < array.length; atual ++){
        if (array[atual] < menorValor){
            menorValor = array[atual];
        }
        
    }
    let posicaoMenor = array.indexOf(menorValor);
    console.log(menorValor);
    console.log(posicaoMenor);
    }
    
    posicaoMenorNum ([2, 4, 6, 7, 10, 0, -3]);
    console.log("-------------------");

 