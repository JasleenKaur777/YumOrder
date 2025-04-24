import { Injectable } from '@angular/core';
import{Cart} from 'src/app/shared/models/cart';
import { Food } from '../shared/models/Food';
import { CartItem } from '../shared/models/cart-item';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  private readonly cart:Cart=new Cart();
  constructor() { }
  addToCart(food:Food){
    let cartitem=this.cart.items.find(item=>item.food.id==food.id);
    if(cartitem){
      this.changeQuantity(food.id,cartitem.quantity+1);
    }
    else{
      this.cart.items.push(new CartItem(food));
    }
  }
  changeQuantity(quantity: number, foodId: number) {
    let cartItem=this.cart.items.find(item=>item.food.id==foodId);
    if(!cartItem) return;
    cartItem.quantity=quantity;
  }
  removeFromCart(foodId:number):void{
    this.cart.items=this.cart.items.filter(item=>item.food.id!=foodId)
  }
  getCart():Cart{
    return this.cart;
  }
}
