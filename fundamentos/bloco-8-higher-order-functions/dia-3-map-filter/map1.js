const users = [
  {firstName: 'Homer', lastName: 'Simpson', isDriver: true},
  {firstName: 'Marge', lastName: 'Simpson', isDriver: true},
  {firstName: 'Bart', lastName: 'Simpson', isDriver: false},
  {firstName: 'Lisa', lastName: 'Simpson', isDriver: false},
  {firstName: 'Maggie', lastName: 'Simpson', isDriver: false},
]

// Retorne um array com as seguintes características: `${firstName} ${lastName}`

const nomeCompleto = () => {
  return users.map((user) => {
    return `${user.firstName} ${user.lastName}`;
  });
}
console.log(nomeCompleto());