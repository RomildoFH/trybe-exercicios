/*1. Encontre o index através do valor de um elemento
Escreva uma algoritmo que recebe 2 parâmetros:
 - Um array contendo um conjunto de números
 - O valor de um desses elementos
Procure esse elemento dentro do array, e imprima no terminal a posição index em que o elemento encontra-se.
Caso não o encontre, imprima:
-----------------------------------
"Elemento não encontrado no array"
----------------------------------- */
let newArray = [1, 4, 10, 40];
let sameNumber = false;
let elemento = 55;
for (let i = 0; i < newArray.length; i += 1) {
  if (elemento === newArray[i]) {
    console.log([i]);
    sameNumber = true
  }
}
if (sameNumber !== true) {
    console.log('ELemento não encontrado');
}
/*
2. Retorne os números ímpares
A Dora aventureira gostaria de ter uma lista com todos o números ímpares entre 1 e 50.
Escreva um algoritmo que imprima no terminal uma string com todos os números inteiros ímpares desse intervalo.
Use a seguinte estrutura na impressão:
----------------
"x, y, z, ...n"
----------------
*/
let emptyArray = [];
let arrayImpares = [];
let impressao = '';
for (let i = 1; i <= 50; i += 1) {
    emptyArray.push(i)
}
for (let i = 0; i < emptyArray.length; i += 1) {
    if (emptyArray[i] % 2 !== 0) {
        arrayImpares.push(emptyArray[i])
    }
}
for (let i = 0; i < arrayImpares.length; i += 1) {
    impressao += arrayImpares[i] + ', '
} console.log(impressao);
/*3- Números divisíveis por 3
Escreva um algoritmo que cria uma sequência numérica de inteiros com intervalo de 1 entre eles. O algoritmo
deve receber antes de criar essa sequência, o valor inicial e final.
Conte os números divisíveis por 3 da sequência e imprima no terminal condicionando:
Se houver 50 ou mais:
---------------------------------------
"Há 50 ou mais números diviseis por 3"
---------------------------------------
Caso o contrário:
--------------------------
"Sequência muito pequena."
*/
let numeroFinal = 150;
let numeroInicial = 1;
let contador = 0;
for (let i = numeroInicial; i <= numeroFinal; i += 2) {
    if (i % 3 === 0) {
        contador += 1
    }
}
if (contador > 50) {
    console.log('Existem mais de 50 números');
} else {
    console.log('Sequência muito pequena');
}