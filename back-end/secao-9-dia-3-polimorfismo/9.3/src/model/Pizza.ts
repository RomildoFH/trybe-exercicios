export default abstract class Pizza {
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

  abstract printPrice(): string;
};
