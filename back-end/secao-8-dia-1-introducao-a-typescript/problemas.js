require('dotenv').config()
const isAdmin = process.env.IS_ADMIN;

if (isAdmin) {
  console.log('Usuário ADMIn está logado');
}

const sum = (a, b) => console.log(a + b);

sum(1, 1);
sum(1, '1');

const area = { width: 10, height: 15 };

console.log(area.width * area.height);

const register = (person) => {
  console.log('Salva informações na tabela person');
}

register({});
