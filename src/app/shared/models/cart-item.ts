import{Food} from 'src/app/shared/models/Food';
export class CartItem {
  food:Food;
  quantity:number=0;
  constructor(food:Food){
this.food=food;
  }
  get price():number{
    return this.food.price*this.quantity;
  }

}
