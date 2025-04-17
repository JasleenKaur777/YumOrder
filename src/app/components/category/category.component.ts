import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
constructor(private readonly router:Router){}
category:string[]=['All','Pizza','Burger','Drinks','Desserts','Fries','Pasta'];
filterByCategory(cat: string) {
  const category = cat.toLowerCase();

  if (category === 'all') {
    this.router.navigate(['']);
  } else {
    this.router.navigate(['/category', category]);
  }
}

}
