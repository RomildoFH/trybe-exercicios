//🚀 5- Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

// function containsA() {  
//   return names.reduce((acc, curr) => {
//     return `${acc.toLowerCase()} ${curr.toLowerCase()}`;
//   }).split('').reduce((acumulador, letra) => {
//     if(letra === 'a') {
//       return acumulador + 1
//     } else {
//       return acumulador;
//     }
//   }, 0)
// }
// console.log(containsA());

// Refatorando PARTE 1
// function containsA() {  
//   return names.reduce((acc, curr) => {
//     return `${acc.toLowerCase()} ${curr.toLowerCase()}`;
//   }).split('').reduce((acumulador, letra) => letra === 'a' ? acumulador + 1 : acumulador, 0)
// }
// console.log(containsA());

// Refatorando PARTE 2
function containsA() {
  return names.reduce((acc, curr) => `${acc.toLowerCase()} ${curr.toLowerCase()}`)
    .split('')
    .reduce((acumulador, letra) => letra === 'a' ? acumulador + 1 : acumulador, 0);
}
console.log(containsA());