const discount20 = (total) => 20; // Retorna 20 // o parâmetro total poderia não ser declarado neste caso, já que a função não o usa, mas poderia ocorrer erros no Lint.
const discount15Percent = (total) => total * 0.15; // Aplica desconto de 15%

const checkout = (itemsArray, callback) => {
    // calcula valor total
    let total = 0;
    for (let index = 0; index < itemsArray.length; index ++) {
        const item = itemsArray[index];
        total += item;
    }

    // aplica os descontos
    total -= callback(total);

    return total;
}

const itemsPrice = [10, 12, 31, 5, 2];

console.log(checkout(itemsPrice, discount20));
console.log(checkout(itemsPrice, discount15Percent));

// Aplicando desconto aleatório
console.log(checkout(itemsPrice, (total) => {
    return total * Math.random();
}));