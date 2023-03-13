require('dotenv').config()
const isAdmin: boolean = process.env.IS_ADMIN === 'true';

if (isAdmin) {
  console.log('Usuário ADMIn está logado');
}

const sum = (a: number, b: number) => console.log(a + b);

sum(1, 1);
// sum(1, '1');

const sum2 = (a: number, b: number) => `sum ${a + b}`; // retornando uma string
sum2(1, 1);

const sum3 = (a: number, b: number): number => a + b; // declarando o tipo do retorno da função
sum3(1, 1);

const Area = { width: 0, height: 0 }

const area1: typeof Area = { width: 10, height: 15 };
const area2: typeof Area = { width: 20, height: 50 };

console.log(area1.width * area1.height);
console.log(area2.width * area2.height);

const Person = {
  nome: '',
  email: '',
  birthday: new Date()
};

const register = (person: typeof Person) => {
  console.log('Salva informações na tabela person');
}

register({nome: 'Romildo', email: 'romildo@gmail.com', birthday: new Date('1994-11-05')});
