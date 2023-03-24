import PizzaDoce from "./PizzaDoce";

export default class PizzaChocolate extends PizzaDoce {
  public printPrice(): string {
    throw new Error("Method not implemented.");      
  }

  public makePizza(): string {
    throw new Error("Method not implemented.");    
  }

  constructor(size: 'medium') {
    super(size);
    this.ingredients.push('chocolate');
  }
}