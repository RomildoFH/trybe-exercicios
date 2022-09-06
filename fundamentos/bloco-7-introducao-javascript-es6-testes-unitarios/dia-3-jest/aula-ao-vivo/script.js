// Exemplo 1
function sum(a, b) {
    return a + b;
  }
//   module.exports = sum;

const summationOf = (number) => {
    if (number === undefined) {
        throw new Error('Number precisa ser um número real');
    }
    let summation = 0;
    for (let index = 1; index <= number; index += 1) {
        summation += index;
    }
    return summation;
};

console.log(summationOf());

module.exports = {sum, summationOf};