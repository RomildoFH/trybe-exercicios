import Pizza from "./model/Pizza";

process.stdout.write('Pizzas --- ');
console.log('Bora para mais um dia!');

const pizza1 = new Pizza('medium');
console.log(pizza1);
console.log(pizza1.makePizza());
console.log(pizza1.printPrice());

