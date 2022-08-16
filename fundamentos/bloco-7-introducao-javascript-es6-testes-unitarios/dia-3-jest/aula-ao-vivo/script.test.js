const {sum, summationOf} = require('./script');

describe('Testando a função sum', () => {

    test('adds 1 + 2 to equal 3', () => {
      expect(sum(1, 2)).toBe(3);
    });
    
    test('adds 0 + 0 to equal 0', () => {
        expect(sum(0, 0)).toBe(0);
      });
    
    test('adds (-5) + (-39) to equal (-44)', () => {
        expect(sum(-5, -39)).toBe(-44);
      });
    
      //Esse teste vai dar erro por causa de ser um ponto flutuante (decimal) o matcher 'toBe' não atua bem nestes casos
    // test('adds 5.1 + 6.55 to equal 11.65', () => {
    //     expect(sum(5.1, 6.55)).toBe(11.65);
    //   });
    
    
    // Com o matcher 'toBeCloseTo' funciona melhor neste caso, pode consultar documentação do jest.
      test('adds 5.1 + 6.55 to equal 11.65', () => {
        expect(sum(5.1, 6.55)).toBeCloseTo(11.65);
      });
})

describe('Testando a função summationOf', () => {
    /* Exemplo 2 - Implemente uma função que receber um número inteiro e retorna o seu somatório
    Por exemplo:
    summation(1): 1
    summation(4): 1 + 2 + 3 + 4 = 10;
    */
    
    test('espera que a função exista', () => {
        expect(typeof(summationOf)).toBe('function');
    });

    test('espera summationOf(0) return 0', () => {
        expect(summationOf(0)).toBe(0);
    });

    test('espera summationOf(3) return 6', () => {
        expect(summationOf(3)).toBe(6);
    });

    test('espera retorne erro quando nenhum número for informado', () => {
        expect(() => { summationOf()}).toThrow();
    });

    test("espera retorne 'Number precisa ser um número real'", () => {
        expect(() => { summationOf()}).toThrowError(new Error('Number precisa ser um número real'));
    });
    
});
