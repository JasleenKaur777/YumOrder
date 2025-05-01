import { CartItem } from './cart-item';

export class Cart {
  items: CartItem[] = [];

  get totalPrice(): number {
    return this.items.reduce((sum, item) => sum + item.food.price * item.quantity, 0);
  }

  get totalCount(): number {
    return this.items.reduce((sum, item) => sum + item.quantity, 0);
  }
}
