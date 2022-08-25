// Transforme o conteúdo de um array em argumentos da função

const point = [1.0, 2.2, -6.6];
const otherPoint = [0.1, 3.5, -99.6];

const printPointCoordinates = (x, y, z) => `Point coordinates are x = ${x}, y = ${y}, z = ${z},`
// Inserindo parâmetros manualmente:
console.log(printPointCoordinates(1.0, 2.2, -6.6));
console.log(printPointCoordinates(0.1, 3.5, -99.6));

// Utilizando spread operator:
console.log(printPointCoordinates(...point));
console.log(printPointCoordinates(...otherPoint));