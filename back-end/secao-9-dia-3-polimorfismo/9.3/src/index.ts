// import Pizza from "./model/Pizza";
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
