import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/models/Food';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent {



  food!: Food;

  constructor(private readonly route: ActivatedRoute, private readonly foodService: FoodService , private readonly cartService:CartService ,private readonly router:Router) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.food = this.foodService.getAll().find(f => f.id == id)!;
  }
  getFormattedRating(rating: number): number {
    return Math.round(rating);
  }
  addToCart(){
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl("/cart-page")
  }
}
