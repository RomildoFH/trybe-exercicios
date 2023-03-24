import Pizza from "./Pizza"

export default class PizzaMargherita extends Pizza {
  constructor(size: 'medium' | 'large' | 'extra-large', bordaRecheada: boolean) {
    super(size, bordaRecheada);
    this.ingredients.push('tomate', 'mussarela', 'manjericão');
  };

  makePizza(): string {
    return `Margherita - Size: ${this.size}, ${this.ingredients}`
  };

  public printPrice(): string {
    if (this.size === 'large') return 'Price: R$ 50';
    if (this.size === 'medium') return 'Price: R$ 25';
    return 'Price: R$ 90';
  }
}