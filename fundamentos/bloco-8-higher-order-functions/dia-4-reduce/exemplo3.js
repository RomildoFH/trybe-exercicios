// criar uma frase com as strng do array epic

const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

const epicPhrase = (array) => {
  return array.reduce((acc, curr) => {
    console.log(`Acc: ${acc} ---> CurrValue: ${curr}`);
    return `${acc} ${curr}`;
  }, 'Star Wars epic phrase:');
}
console.log(epicPhrase(epic));

//LEMBRETE: usando JOIN para o mesmo propósito:
console.log(`Star Wars epic phrase:`, epic.join(' '));