import Pizza from "./model/Pizza";
import PizzaChocolate from "./model/PizzaChocolate";
import PizzaMargherita from "./model/PizzaMargherita";
import PizzaPepperoni from "./model/PizzaPepperoni";

process.stdout.write('Pizzas --- ');
console.log('Bora para mais um dia!');

// const pizza1 = new Pizza('medium', false); // pizza abstrata não pode ser instanciada
// console.log(pizza1);
// console.log(pizza1.makePizza());
// console.log(pizza1.printPrice());

const pizza2 = new PizzaPepperoni('large', true);
console.log(pizza2);
console.log(pizza2.makePizza());

const pizza3 = new PizzaMargherita('extra-large', true);
console.log(pizza3);
console.log(pizza3.makePizza());

const pizza4 = new PizzaChocolate('medium');
console.log(pizza4);
console.log(pizza4.makePizza());

process.stdout.write('Quantidde de pizzas produzidas = ');
process.stdout.write(Pizza.quantidadePizzas);
console.log('');

const pizza5 = new PizzaMargherita('medium', true);
console.log(pizza5);
console.log(pizza5.makePizza());

process.stdout.write('Quantidde de pizzas produzidas = ');
process.stdout.write(Pizza.quantidadePizzas);
console.log('');
