// const numbers = [1, 2, 3, 4, 5];
// Mostre somente os números ímpares, dentro de um array
//Usando For
// const filterImpar = () => {
//   const impares = [];
//   for (let number of numbers) {
//     if(number % 2 !== 0) {
//       impares.push(number);
//     }
//   }
//   return impares;
// };

// console.log(filterImpar([1, 2, 3, 4, 5]));

// Usando o filter

const filterImpar = (numbers) => {
 return numbers.filter((number) => {
  return number % 2 !== 0;
 })
};
console.log(filterImpar([1, 2, 3, 4, 5]));

module.exports = filterImpar;