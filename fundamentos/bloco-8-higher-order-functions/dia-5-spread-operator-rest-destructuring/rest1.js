// Crie uma função que some todos os números

const sumAll = (values) => {
  let sum = 0;

  values.forEach((value) => {
    sum += value;
  });
  return sum;
}

// console.log(sumAll([1, 2, 3])); // Parâmetro é um array
// console.log(sumAll(1, 2, 3)) // Parâmetros são números: emitirá erro

// Se números estiverem fora de um array ():
// const sumAll2 = (...values) => {
//   return values.reduce((acc, curr) => {
//     return acc + curr;
//   });
// }
// console.log(sumAll2([1, 2, 3])); // Parâmetro é um array
// console.log(sumAll2(1, 2, 3)) // Parâmetros são números, somará independente da quantidade.

const sumAll3 = (...values) => {
  let sum = 0;

  values.forEach((value) => {
    sum += value;
  });
  return sum;
}
console.log(sumAll3([1, 2, 3])); // Parâmetro é um array: Não soma pois o values espera receber number;
console.log(sumAll3(1, 2, 3)) // Parâmetros são números, somará independente da quantidade.