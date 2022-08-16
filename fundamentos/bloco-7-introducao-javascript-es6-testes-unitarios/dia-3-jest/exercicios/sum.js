function sum(a, b) {
    if(typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('parameters must be numbers');
    }
    return a + b;
  }

  console.log(sum(4, '5'));

  module.exports = sum;

  