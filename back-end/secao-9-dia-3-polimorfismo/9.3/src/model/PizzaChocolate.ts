import PizzaDoce from "./PizzaDoce";

export default class PizzaChocolate extends PizzaDoce {
  public printPrice(): string {
    try {
      throw new Error("Method not implemented.");
    } catch (error) {
      return "Method not implemented."
    }
  }

  public makePizza(): string {
    try {
      throw new Error("Method not implemented.");
    } catch (error) {
      return "Method not implemented."
    }
  }

  constructor(size: 'medium') {
    super(size);
    this.ingredients.push('chocolate');
  }
}