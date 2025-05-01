import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cart } from 'src/app/shared/models/cart';
import { Food } from '../shared/models/Food';
import { CartItem } from '../shared/models/cart-item';

const CART_KEY = 'cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Cart = new Cart();
  private cartSubject = new BehaviorSubject<Cart>(this.cart);

  cartObservable = this.cartSubject.asObservable(); // Expose as observable

  constructor() {
    const storedCart = localStorage.getItem(CART_KEY);
    this.cart = storedCart ? this.rehydrateCart(JSON.parse(storedCart)) : new Cart();
    this.updateCart();
  }

  private rehydrateCart(data: any): Cart {
    const cart = new Cart();
    cart.items = data.items.map((item: any) => {
      const food = new Food();
      Object.assign(food, item.food);
      const cartItem = new CartItem(food);
      cartItem.quantity = item.quantity;
      return cartItem;
    });
    return cart;
  }

  private updateCart(): void {
    this.cartSubject.next(this.cart);
    localStorage.setItem(CART_KEY, JSON.stringify(this.cart));
  }

  addToCart(food: Food): void {
    let cartItem = this.cart.items.find(item => item.food.id === food.id);
    if (cartItem) {
      cartItem.quantity++;
    } else {
      this.cart.items.push(new CartItem(food));
    }
    this.updateCart();
  }

  changeQuantity(foodId: number, quantity: number): void {
    const cartItem = this.cart.items.find(item => item.food.id === foodId);
    if (cartItem) {
      cartItem.quantity = quantity;
      this.updateCart();
    }
  }

  removeFromCart(foodId: number): void {
    this.cart.items = this.cart.items.filter(item => item.food.id !== foodId);
    this.updateCart();
  }

  getCart(): Cart {
    return this.cart;
  }
}
