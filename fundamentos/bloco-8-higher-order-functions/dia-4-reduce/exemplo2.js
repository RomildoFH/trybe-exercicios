// Crie um função que some todos os números PARES do array

const numbers = [1, 3, 4, 6, 7, 12, 24];

// usando reduce com ternary operator
const sumEven = (array) => numbers.reduce(((acc, curr) => curr % 2 === 0 ? acc + curr : acc), 0);
console.log(sumEven(numbers));

// usando reduce com filter
const sumEven2 = (array) => numbers
  .filter((number) => number % 2 === 0)
  .reduce((acc, curr) => acc + curr);
console.log(sumEven2(numbers));