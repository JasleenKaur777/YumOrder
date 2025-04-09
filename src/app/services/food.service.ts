import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Food } from 'src/app/shared/models/Food';



@Injectable({
  providedIn: 'root'
})
export class FoodService {


  getAll():Food[]{
    return [
      {
        id: 1,
        name: 'Veggie Burger',
        cookingTime: '15 min',
        price: 99,
        favourite: false,
        stars: 4.0,
        imageUrl: 'assets/images/food-1.jpeg',
        tags: ['American', 'Fast Food','Burger'],
        origins: ['USA'],
      },
      {
        id: 2,
        name: 'French Fries',
        cookingTime: '10 min',
        price: 69,
        favourite: true,
        stars: 5.0,
        imageUrl: 'assets/images/food-2.jpeg',
        tags: ['French Fries', 'Fast Food','Aloo'],
        origins: ['USA'],
      },
      {
        id: 3,
        name: 'Margherita Pizza',
        cookingTime: '30 min',
        price: 199,
        favourite: true,
        stars: 4.5,
        imageUrl: 'assets/images/food-3.webp',
        tags: ['Italian', 'Cheesy'],
        origins: ['Italy'],
      },
      {
        id: 4,
        name: 'Pasta Alfredo',
        cookingTime: '25 minutes',
        price: 179,
        favourite: false,
        stars: 4.3,
        imageUrl: 'assets/images/food-4.jpeg',
        tags: ['Italian', 'Creamy'],
        origins: ['Italy']
      },
      {
        id: 5,
        name: 'Red sauce Pasta ',
        cookingTime: '30 minutes',
        price: 149,
        favourite: true,
        stars: 4.3,
        imageUrl: 'assets/images/food-5.webp',
        tags: ['Italian', 'Creamy'],
        origins: ['Italy']
      },
      {
        id: 6,
        name: 'Golden spicy Burger',
        cookingTime: '30 min',
        price: 299,
        favourite: false,
        stars: 4.0,
        imageUrl: 'assets/images/food-6.webp',
        tags: ['American', 'Fast Food','Burger'],
        origins: ['England'],
      },
      {
        id: 7,
        name: 'Vegetable Noodles',
        cookingTime: '20 min',
        price: 80,
        favourite: true,
        stars: 4.3,
        imageUrl: 'assets/images/food-7.webp',
        tags: ['India', 'Fast Food','Burger'],
        origins: ['India'],
      },
    ]
    }

}
