export default class Pizza {
  protected size: 'medium' | 'large' | 'extra-large';
  protected ingredients: string[];
  protected bordaRecheada: boolean;

  constructor(size: 'medium' | 'large' | 'extra-large', bordaRecheada: boolean) {
    this.size = size;
    this.ingredients = ['molho'];
    this.bordaRecheada = bordaRecheada;
  };

  get pizzaSize() {
    return this.size;
  }

  makePizza(): string {
    return `${this.size} pizza com ${this.ingredients}`
  };

  printPrice(): string {
    if (this.size === 'large') return 'Price: R$ 60';
    if (this.size === 'medium') return 'Price: R$ 30';
    return 'Price: R$ 100';
  };
};
