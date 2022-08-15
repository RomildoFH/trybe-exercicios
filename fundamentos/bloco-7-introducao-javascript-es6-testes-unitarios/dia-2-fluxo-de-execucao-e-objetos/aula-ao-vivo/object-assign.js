const quadrinhos2 = {
    collection: 'Sherlock Homes',
    title: 'Qualquer título',
}

console.log(quadrinhos2);

const objectAutor = {
    author: 'Nome do Autor',
}

// Copiar as entradas de um objeto para outro
Object.assign(quadrinhos2, objectAutor);

console.log(quadrinhos2);

//Clone de objetos
const cloneQuadrinhos2 = Object.assign({}, quadrinhos2, objectAutor);
console.log(cloneQuadrinhos2);