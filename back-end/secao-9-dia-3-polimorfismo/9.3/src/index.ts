import Pizza from "./model/Pizza";
import PizzaPepperoni from "./model/PizzaPepperoni";

process.stdout.write('Pizzas --- ');
console.log('Bora para mais um dia!');

const pizza1 = new Pizza('medium', false);
console.log(pizza1);
console.log(pizza1.makePizza());
console.log(pizza1.printPrice());

const pizza2 = new PizzaPepperoni('large', true);
console.log(pizza2);
console.log(pizza2.makePizza());
