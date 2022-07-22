//1. Faça um algoritmo que calcule a soma de 1 a 50 usando a estrutura "for" e retorne no formato: A soma de 1 a 50 é: X.
let resultado = 0;
for (let index = 1; index <= 50; index++) {
  resultado += index;
}
console.log("Questão 1:")
console.log('A soma de 1 a 50 é: ' + resultado);
console.log("------------------------")

//2. Crie um algoritmo que conte quantos números do intervalo entre 2 e 150 são divisíveis por 3. Caso a quantidade seja igual a 50, exiba uma mensagem secreta.
let contador = 0;
for (let i = 3; i <= 150; i++) {
  if (i % 3 === 0) {
    contador++;
  }
}
if (contador === 50) {
  console.log('Mensagem secreta');
}
console.log("Questão 2:")
console.log('Quantidade: ' + contador);
console.log("------------------------")

// 3. Crie um algoritmo que recebe a idade de Nat, Renan e Sincero e imprime quem é a pessoa mais nova no formato: "Pessoa" é a mais nova.
let pessoa = ['Natalia', 'Renan', 'Sincero'];

let idade = [31, 35, 40];

let menorIdade = idade[0];

for (let y = 0; y < idade.length; y++) {
  if (menorIdade > idade[y]) {
    menorIdade = idade[y];
  }
}
console.log("Questão 3:")
console.log(pessoa[idade.indexOf(menorIdade)] + " é a pessoa mais nova.");