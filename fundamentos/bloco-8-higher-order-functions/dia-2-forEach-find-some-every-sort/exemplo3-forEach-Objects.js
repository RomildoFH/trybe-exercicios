const pizzas = [
    { flavor: 'Frango com catupiry', price: 12.20 },
    { flavor: 'Marguerita', price: 13.50 },
    { flavor: 'Quatro Queijos', price: 13.63 }
];

// Mostrar o sabor e o preço de cada pizza
const infoPizzas = () => {
    pizzas.forEach( (pizza) => {
        console.log(`A pizza de ${pizza.flavor} custa R$ ${pizza.price}`)
    });
};
infoPizzas();