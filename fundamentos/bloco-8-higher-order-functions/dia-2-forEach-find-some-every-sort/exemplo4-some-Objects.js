const pizzas = [
    { flavor: 'Frango com catupiry', price: 12.20 },
    { flavor: 'Marguerita', price: 13.50 },
    { flavor: 'Quatro Queijos', price: 13.63 }
];

// Retorne TRUE se existir uma pizza com o valor menor que 13 e FALSE caso não exista
const precoMenorQue13 = () => {
    let result;
    for (let index = 0; index < pizzas.length; index += 1) {
        if (pizzas[index].price < 13) {
            result = true;
            break; // Interrompe o loop quando satisfazer a condição
        } else {
            result = false;
        }
    }
    return result;
}
console.log(precoMenorQue13());
console.log('--------')
// Usando SOME
const precoMenorQue13b = () => {
    let result = pizzas.some((element) => {
        return element.price < 13;
    });
    return result;
}
console.log(precoMenorQue13b());
console.log('--------')
// REFATORANDO
const precoMenorQue13c = () => pizzas.some((element) => element.price < 13);
console.log(precoMenorQue13c());
console.log('--------')

