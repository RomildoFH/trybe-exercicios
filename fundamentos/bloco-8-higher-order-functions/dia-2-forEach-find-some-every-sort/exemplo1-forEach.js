const letters = ['a', 'c', 'b', 'e', 'g', 'f'];

//imprimir todo o array em linhas diferentes

//Usando FOR
console.log('Usando for');
for (index = 0; index < letters.length; index += 1) {
    console.log(letters[index]);
}
console.log('---------');

//Usando forEACH
console.log('Usando forEACH');
letters.forEach((element, index, array) => {
    console.log(element);
    console.log(`Valor corrente é: ${element} --> Index: ${index} --> Array: ${array}`)
})
console.log('---------');

// Refatorando usando forEach:
console.log('Refatorando para 1 linha:');
letters.forEach((element,index) => console.log(letters[index]));
console.log('---------');