//1 - Dada uma matriz, transforme em um array.

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

// console.log(arrays);

function flatten() {
  return arrays.reduce((acc, curr) => {
    return acc.concat(curr);
  })
}
console.log(flatten());

// Gabarito
// function flatten() {
//   return arrays.reduce((acc, curr) => acc.concat(curr), []);
// }
// console.log(flatten());