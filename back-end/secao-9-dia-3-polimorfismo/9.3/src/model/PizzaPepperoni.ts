import Pizza from "./Pizza"

export default class PizzaPepperoni extends Pizza {
  constructor(size: 'medium' | 'large' | 'extra-large', bordaRecheada: boolean) {
    super(size, bordaRecheada);
    this.ingredients.push('pepperoni', 'queijo');
  };

  makePizza(): string {
    return `Pepperoni - Size: ${this.size}, ${this.ingredients}`
  };
}