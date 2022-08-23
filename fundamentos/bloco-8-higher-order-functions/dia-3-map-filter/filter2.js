const users = [
  {firstName: 'Homer', lastName: 'Simpson', isDriver: true},
  {firstName: 'Marge', lastName: 'Simpson', isDriver: true},
  {firstName: 'Bart', lastName: 'Simpson', isDriver: false},
  {firstName: 'Lisa', lastName: 'Simpson', isDriver: false},
  {firstName: 'Maggie', lastName: 'Simpson', isDriver: false},
]

const filterNaoPodemDirigir = () => {
  return users.filter((user) => {
    return user.isDriver === false;
  });
}

console.log(filterNaoPodemDirigir());

// Desafio: retornar um array com apenas os nomes das pessoas que não podem dirigir
// Dica: use map