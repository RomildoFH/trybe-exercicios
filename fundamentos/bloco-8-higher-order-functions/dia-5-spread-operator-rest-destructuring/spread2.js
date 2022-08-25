// Una os dois arrays

const horrorBooks = ['It', 'The Shining'];
const scifiBooks = ['I, Robot', 'Caves of Steel', 'The End of Eternity'];

// Usando FOR-IN
// let awesomeBooks = [];
// for (let book in horrorBooks) {
//   awesomeBooks.push(horrorBooks[book]);
// }
// for (let book in scifiBooks) {
//   awesomeBooks.push(scifiBooks[book]);
// }
// console.log(awesomeBooks);

// Usando spread operator:
const awesomeBooks = [...horrorBooks, ...scifiBooks];
console.log(awesomeBooks);