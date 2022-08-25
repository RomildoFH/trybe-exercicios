const person = {
  name: 'João',
  lastName: 'Jr',
  age: 34,
};

const { nationality = 'Brasilian' } = person;
console.log(nationality);
console.log(person);