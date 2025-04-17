import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { FoodService } from 'src/app/services/food.service';
import{Food} from 'src/app/shared/models/Food';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  constructor(private readonly foodservice:FoodService,
    private readonly route:ActivatedRoute,
    private readonly router:Router){}
  food:Food[]=[];

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const searchItem = params.get('searchItem');
      const category = params.get('category');

      if (searchItem) {
        this.searchFood(searchItem);
      } else if (category) {
        this.searchCategory(category);
      } else {
        this.food = this.foodservice.getAll();
      }
    });
  }

  searchCategory(category: string) {
    const lowerCategory = category.toLowerCase();
    this.food = this.foodservice.getAll().filter(item =>
      item.tags.some(tag => tag.toLowerCase() === lowerCategory)

    );

    if (this.food.length === 0) {
      console.log("No items found for category:", category);
    }
    console.log(this.food);
  }
getRoundedRating(rating: number): number {
  return Math.floor(rating);
}

getFormattedRating(rating: number): any {
  return Math.round(rating);
}
searchFood(searchText: string): void {
  const lowerSearch = searchText.toLowerCase();
  console.log("Searching by food name:", lowerSearch);

  this.food = this.foodservice.getAll().filter(item =>
    item.name.toLowerCase().includes(lowerSearch)
  );

  if (this.food.length === 0) {
    console.log(`No items found for search term: ${searchText}`);
  }
}



}
