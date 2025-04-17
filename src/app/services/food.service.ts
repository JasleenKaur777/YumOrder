import { Injectable } from '@angular/core';
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
        stars: 8.0,
        imageUrl: 'assets/images/food-1.jpeg',
        tags: ['American', 'Fast Food','burger'],
        origins: ['USA'],
      },
      {
        id: 2,
        name: 'French Fries',
        cookingTime: '10 min',
        price: 69,
        favourite: true,
        stars: 10.0,
        imageUrl: 'assets/images/food-2.jpeg',
        tags: ['French Fries', 'Fast Food','Aloo','fries'],
        origins: ['USA'],
      },
      {
        id: 3,
        name: 'Margherita Pizza',
        cookingTime: '30 min',
        price: 199,
        favourite: true,
        stars: 9,
        imageUrl: 'assets/images/food-3.webp',
        tags: ['Italian', 'Cheesy','Pizza'],
        origins: ['Italy'],
      },
      {
        id: 4,
        name: 'Pasta Alfredo',
        cookingTime: '25 minutes',
        price: 179,
        favourite: false,
        stars: 8.6,
        imageUrl: 'assets/images/food-4.jpeg',
        tags: ['Italian', 'Creamy','pasta'],
        origins: ['Italy']
      },
      {
        id: 5,
        name: 'Red sauce Pasta ',
        cookingTime: '30 minutes',
        price: 149,
        favourite: true,
        stars: 8.6,
        imageUrl: 'assets/images/food-5.webp',
        tags: ['Italian', 'Creamy','pasta'],
        origins: ['Italy']
      },
      {
        id: 6,
        name: 'Golden spicy Burger',
        cookingTime: '30 min',
        price: 299,
        favourite: false,
        stars: 8.0,
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
        stars: 8.6,
        imageUrl: 'assets/images/food-7.webp',
        tags: ['India', 'Fast Food','Noodles','Pasta'],
        origins: ['India'],
      },
      {
        id: 8,
        name: "Paneer Tikka Wrap",
        cookingTime: '15 min',
        price: 99,
        favourite: false,
        stars: 7.6,
        imageUrl: "assets/images/food-9.webp",
        tags: ['India', 'Wrap','Paneer Wrap'],
        origins: ['India'],
      },
      {
        id: 9,
        name: "Coca Cola",
        price: 49,
        cookingTime: '15 min',
        imageUrl: "assets/images/food-10.webp",
        favourite: false,
        stars: 8,
        tags: ['India', 'Drinks','Coco Cola','Drinks'],
        origins: ['India']
      },
      {
        id: 10,
        name: "Chocolate Brownie",
        price: 129,
        cookingTime: '10 min',
        imageUrl: "assets/images/food-11.webp",
        favourite: true,
        stars: 8.6,
        tags: ['India', 'Desserts','Brownie'],
        origins: ['India']
      }
    ]
    }

}
