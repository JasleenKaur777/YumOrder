import{CartItem} from 'src/app/shared/models/cart-item';
export class Cart {
  items: CartItem[] = [];

  get totalPrice(): number {
    let totalPrice=0;
    this.items.forEach(item=>{
      totalPrice+=item.price;
    })
    return totalPrice;
  }

  // get totalCount(): number {
  //   return this.items.reduce((sum, current) => sum + current.quantity, 0);
  // }

  // addItem(item: CartItem) {
  //   const existingItem = this.items.find(i => i.food.id === item.food.id);
  //   if (existingItem) {
  //     existingItem.quantity += item.quantity;
  //   } else {
  //     this.items.push(item);
  //   }
  // }

  // removeItem(foodId: number) {
  //   this.items = this.items.filter(item => item.food.id !== foodId);
  // }

  // clearCart() {
  //   this.items = [];
  // }
}
