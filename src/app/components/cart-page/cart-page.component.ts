import { CartItem } from './../../shared/models/cart-item';
import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Cart } from 'src/app/shared/models/cart';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent {
  cart!: Cart;

  constructor(private readonly cartService: CartService) {}

  ngOnInit(): void {
    this.cart = this.cartService.getCart();
    console.log('Cart object:', this.cart);


  }

  removeItem(id: number): void {
    this.cartService.removeFromCart(id);
    this.cart = this.cartService.getCart(); // Refresh view
  }
  changeQuantity(cartItem: CartItem, quantityInString: string) {
    // this.cartService.updateCartTotals();
    // this.cartService.saveCart();
    const quantity = parseInt(quantityInString, 10);
    this.cartService.changeQuantity(cartItem.food.id, quantity);
    this.cart = this.cartService.getCart(); // Refresh after update
  }
  // getTotalPrice(): number {
  //   return this.cart.items.reduce((total, item) => total + item.food.price * item.quantity, 0);
  // }

}
