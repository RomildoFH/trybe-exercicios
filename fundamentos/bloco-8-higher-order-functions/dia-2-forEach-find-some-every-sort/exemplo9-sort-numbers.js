const numbers = [8, 5, 9, 3, 1, 2, 15];

// Ordena alfabeticamente
const ordenaNumbers = () => numbers.sort();

console.log(ordenaNumbers());
console.log('---------');

// Para ordenar em ordem crescente

function comparar(a, b) {
    if (a < b) {
        return -1;
    }
    if (a > b) {
        return 1;
    }
    return 0;
}

const ordenaNumbers2 = () => {
    return numbers.sort(comparar);
}
console.log(ordenaNumbers2());
console.log('---------');

const ordenaNumbers3 = () => numbers.sort((a, b) => a - b);
console.log(ordenaNumbers3());
console.log('---------');
