// Para fixar ainda mais conceito de reduce, faça uma função que some todos os números pares do array:
const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const somaNumeros = () => {
  return numbers.filter((number) => number % 2 === 0).reduce((acc, curr) => acc + curr);
}
console.log(somaNumeros());

const somaNumeros2 = () => numbers.reduce((acc, curr) => curr % 2 === 0 ? acc + curr : acc);
console.log(somaNumeros2());