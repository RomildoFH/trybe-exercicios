import Pizza from "./Pizza";

export default abstract class PizzaDoce extends Pizza {
  protected size: 'medium';
  protected ingredients: string[];

  constructor(size: 'medium') {
    super(size, false)
    this.size = size;
    this.ingredients = ['açucar'];
  };
}