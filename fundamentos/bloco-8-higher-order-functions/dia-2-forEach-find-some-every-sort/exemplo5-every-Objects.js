const pizzas = [
    { flavor: 'Frango com catupiry', price: 12.20 },
    { flavor: 'Marguerita', price: 13.50 },
    { flavor: 'Quatro Queijos', price: 16.63 }
];

// Retorne TRUE se TODAS as pizzas tem valor menor que 16.00 e FALSE caso contrário

const todosMenoresQue16 = () => {
    let result = pizzas.every((element) => {
        return element.price < 16;
    });
    
    return result;
}
console.log(todosMenoresQue16());
console.log('---------');

// Refatorando
const todosMenoresQue16b = () => pizzas.every((element) => element.price < 16);
console.log(todosMenoresQue16b());
console.log('---------');