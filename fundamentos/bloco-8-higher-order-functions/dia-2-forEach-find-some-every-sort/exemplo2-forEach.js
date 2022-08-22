const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Multiplicar cada elemento por 3 e imprimir um array

//Usando For:
console.log(`Utilizando for`)
const multiploTres = [];
for (let index = 0; index < numbers.length; index += 1) {
    multiploTres.push(numbers[index] * 3);
}
console.log(multiploTres);
console.log(`-----------`);

// Usando forEach
console.log(`Utilizando forEach`)
const multiploTres2 = [];
numbers.forEach((number) => multiploTres2.push(number * 3));
console.log(multiploTres2);
console.log(`-----------`);

// Colocar em uma função
console.log(`Colocando em uma função`)
const multiploTres3 = [];
const multiplicaPorTres = (numbers) => {
    numbers.forEach((number) => multiploTres3.push(number * 3));
    return multiploTres3;
}
console.log(multiplicaPorTres());
console.log(`-----------`);
