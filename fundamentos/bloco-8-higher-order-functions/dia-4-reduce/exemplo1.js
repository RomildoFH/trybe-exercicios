// Crie um função que some todos os números do array

const numbers = [2, 3, 4, 6, 7, 12, 24];

const sum = (array) => numbers.reduce((acc, curr) => acc + curr);
console.log(sum(numbers));