// 1. Crie uma função que receba um número e retorne seu fatorial.
// Na matemática, o fatorial de um número inteiro e positivo N, representado por N!, é o produto de todos os seus antecessores até o número um. Exemplo: 4! = 4 * 3 * 2 * 1 = 24.
// Com base nessas informações:
// Crie a função factorial que recebe um número como parâmetro, utilizando arrow functions (Lembre-se de armazenar a função utilizando o tipo de variável correta).
// Dentro da função crie uma variável result.
// Crie a lógica para retornar o fatorial de N!.
// Imprima no terminal "Esse é o fatorial resultado da função" (Lembre-se de utilizar template literals nesse momento).
// Dica: Armazene a chamada da função em uma varíavel para imprimir no terminal seu resultado.



const factorial = (number) => {
    let result = 1;
  
    for (let index = 2; index <= number; index += 1) {
        result *= index;
    }
  
    return result;
  };
  
  const print = factorial(4); //Lembre-se de alterar o valor de number!
  
  console.log(`Esse é o fatorial ${print}`);


// Bônus: tente fazer o mesmo exercício de forma recursiva. Spoiler: É possível resolver com uma linha usando ternary operator.

const factorial2 = number => number > 1 ? number * factorial2(number - 1) : 1;
console.log(factorial2(4));

// 2. Crie uma função que receba uma frase como parâmetro e retorne a maior palavra da frase.

// 'Antônio foi no banheiro e não sabemos o que aconteceu' // retorna 'aconteceu'

// const texto = 'Antônio foi no banheiro e não sabemos o que aconteceu'
// const arrayPalavras = texto.split(' ');

const longestWord = (texto) => {
const arrayPalavras = texto.split(' ');
let maiorPalavra = arrayPalavras[0];
    for (let index = 0; index < arrayPalavras.length; index ++) {
        if(arrayPalavras[index].length > maiorPalavra.length) {
            maiorPalavra = arrayPalavras[index]
        }
    }
return maiorPalavra;
}

console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu'));