import { Component, OnInit } from '@angular/core';
import { FoodService } from 'src/app/services/food.service';
import{Food} from 'src/app/shared/models/Food';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  constructor(private foodservice:FoodService){}
  food:Food[]=[];
ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
this.food=this.foodservice.getAll();
}

}
