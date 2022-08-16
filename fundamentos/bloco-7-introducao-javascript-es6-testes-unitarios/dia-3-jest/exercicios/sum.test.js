const { default: test } = require('node:test');
const sum = require('./sum');

test('Testar se sum(4, 5) return 9', () => {
    expect(sum(4, 5)).toBe(9);
});