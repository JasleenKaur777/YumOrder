import { Food } from "./Food";

export class CartItem {
  quantity: number = 1;

  constructor(public food: Food) {}

  get price(): number {
    return this.food.price * this.quantity;
  }
}
