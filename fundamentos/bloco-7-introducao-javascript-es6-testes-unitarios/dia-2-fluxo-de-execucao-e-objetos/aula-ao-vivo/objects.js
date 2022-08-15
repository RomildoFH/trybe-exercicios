const quadrinho1 = {
    collection: 'Tio Patinhas',
    title: 'Um título qualuqer',
}

quadrinho1.author = 'Dom Rosa';
quadrinho1['publishingCompany'] = 'Editora Abril'
console.log(quadrinho1);
// console.log(quadrinho1.collection);
// console.log(quadrinho1.title);
console.log('---------------------------------');

// Para colocar as chaves de um objeto dentro de um array:
let arrayChaves = [];
for (let index in quadrinho1) {
    arrayChaves.push(index);
}
console.log(arrayChaves);
console.log('---------------------------------');

// Utilizando object.key
let arrayChaves2 = Object.keys(quadrinho1);
console.log(arrayChaves2);
console.log(Object.keys(quadrinho1).includes('author')); // Retorna true se incluir o termo específicado em suas chaves;
console.log('---------------------------------');

// Colocar os valores de um objeto em um array
console.log(Object.values(quadrinho1));
console.log(Object.values(quadrinho1).includes('Pato Donald'));
console.log('---------------------------------');

// Colocar as entradas do objeto em um array:
console.log(Object.entries(quadrinho1));
console.log('---------------------------------');

//Utilização do typeof: Identifica o tipo de dado em uma determinada variável
console.log(typeof quadrinho1);
console.log(typeof Object.values(quadrinho1)); // O JS interpreta o array como sendo objeto
console.log(Array.isArray (Object.values(quadrinho1))); // Informa true ou false se o elemento é um array