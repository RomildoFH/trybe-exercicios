const myFizzBuzz = require('./fizzBuzz')

test("Verificar se myFizzBuzz(15) retorna 'fizzbuzz'", () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
});

test("Verfificar se myFizzBuzz(9) retorna 'fizz'", () => {
    expect(myFizzBuzz(9)).toBe('fizz');
});

test("Verfificar se myFizzBuzz(10) retorna 'buzz'", () => {
    expect(myFizzBuzz(10)).toBe('buzz');
});

test("Verfificar se myFizzBuzz(2) retorna 2", () => {
    expect(myFizzBuzz(2)).toBe(2);
});

test("Verfificar se myFizzBuzz(num) não for número retorna false", () => {
    expect(myFizzBuzz('a')).toBe(false);
});