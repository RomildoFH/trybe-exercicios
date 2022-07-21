//Exercicios array e loop For

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// 1.Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log();

console.log("O resultado da 1° questão é:")
console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[2]);
console.log(numbers[3]);
console.log(numbers[4]);
console.log(numbers[5]);
console.log(numbers[6]);
console.log(numbers[7]);
console.log(numbers[8]);
console.log(numbers[9]);


// 2.Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;

let resultadoSomaArray = 0;

for (var index = 0; index < numbers.length; index ++){
    resultadoSomaArray = resultadoSomaArray + numbers[index];
}
console.log("O resultado da 2° questão é:")
console.log(resultadoSomaArray);

// 3.Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array; A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos.

let mediaAritmeticaArray = resultadoSomaArray / numbers.length;

console.log("O resultado da 3° questão é:");
console.log(mediaAritmeticaArray);

// 4.Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

let valorFinalDoArray = numbers[numbers.length - 1];

if (valorFinalDoArray > 20){
    console.log("O resultado da 4° questão é:");
    console.log("valor maior que 20");
} else {
    console.log("O resultado da 4° questão é:");
    console.log("valor menor ou igual a 20");
}

// 🚀 5.Utilizando for, descubra qual o maior valor contido no array e imprima-o;

let maiorValorNoArray = 0;

for (var contador = 0; contador < numbers.length; contador ++){
    if (numbers[contador] > maiorValorNoArray){
        maiorValorNoArray = numbers[contador];
    } else {
        maiorValorNoArray = maiorValorNoArray;
    }
}
console.log("O resultado da 5° questão é:");
console.log(maiorValorNoArray);

// 6.Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

let numImpares = [];

for(n = 0; n < numbers.length; n++){
    if (numbers[n] % 2 !== 0){
        numImpares.push(numbers[n]);
    }
}
console.log("O resultado da 6° questão é:");
console.log(numImpares.length);

// 7.Utilizando for, descubra qual o menor valor contido no array e imprima-o;

let menorValorNoArray = numbers[0];

for (var y = 1; y < numbers.length; y ++){
    if (numbers[y] < menorValorNoArray){
        menorValorNoArray = numbers[y];
    }
}
console.log("O resultado da 7° questão é:");
console.log(menorValorNoArray);


// 8.Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;

let arrayNumeros =[];

for (var z = 1; z <= 25; z ++){
    arrayNumeros.push(z);
}
console.log("O resultado da 8° questão é:");
console.log(arrayNumeros);

// 9.Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2.

let arrayNumerosDivididos = [];

for (var x = 0; x < arrayNumeros.length; x ++){
    arrayNumerosDivididos.push(arrayNumeros[x] / 2);
}
console.log("O resultado da 9° questão é:");
console.log(arrayNumerosDivididos);
