// Reduza o array em um objeto com nome e email

/*
{
  'Adriano Imperador': 'didico@futebol.br',
  'Marta Vieira da Silva': 'marta@futebol.br',
  'Ronaldinho Gaúcho': 'ronaldog@futebol.br',
  'Ronaldo Fenômeno': 'r99@futebol.br'
}
*/


const players = [
  {fullname: 'Adriano Imperador', email: 'didico@futebol.br'},
  {fullname: 'Marta Vieira da Silva', email: 'marta@futebol.br'},
  {fullname: 'Ronaldinho Gaúcho', email: 'ronaldog@futebol.br'},
  {fullname: 'Ronaldo Fenômeno', email: 'r99@futebol.br'},
]

const newPlayers = (array) => {
  return array.reduce((acc, curr) => {
    //objeto[chave] = valor
    acc[curr.fullname] = curr.email;
    return acc; //Retorna o objeto que está acumulando
  }, {});
}
console.log(newPlayers(players));