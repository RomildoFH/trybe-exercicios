export default abstract class Pizza {
  protected size: 'medium' | 'large' | 'extra-large';
  protected ingredients: string[];
  protected bordaRecheada: boolean;
  private static _quantidadePizzas = 0;

  constructor(size: 'medium' | 'large' | 'extra-large', bordaRecheada: boolean) {
    this.size = size;
    this.ingredients = ['molho'];
    this.bordaRecheada = bordaRecheada;
    Pizza._quantidadePizzas += 1;
  };

  get pizzaSize() {
    return this.size;
  }

  static get quantidadePizzas(): string {
    return `Quantidade produzida é ${Pizza._quantidadePizzas}`;
  }

  makePizza(): string {
    return `${this.size} pizza com ${this.ingredients}`
  };

  abstract printPrice(): string;
};
