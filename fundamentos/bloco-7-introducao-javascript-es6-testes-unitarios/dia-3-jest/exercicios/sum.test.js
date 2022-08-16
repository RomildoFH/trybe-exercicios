const sum = require('./sum');

test('Testar se sum(4, 5) return 9', () => {
    expect(sum(4, 5)).toBe(9);
});

test('Testar se sum(0, 0) return 0', () => {
    expect(sum(0, 0)).toBe(0);
});

test("Testar se sum(4, '5') return erro", () => {
    expect(() => { sum(4, '5') }).toThrow();
});

test("Testar se a mensagem de erro é 'parameters must be numbers'", () => {
    expect(() => { sum(4, '5') }).toThrowError(new Error('parameters must be numbers'));
});