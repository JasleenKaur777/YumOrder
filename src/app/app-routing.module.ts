import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FoodPageComponent } from './components/food-page/food-page.component';
import { CartPageComponent } from './components/cart-page/cart-page.component';

const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"search/:searchItem",
    component:HomeComponent
  },{
    path:'',
    component:HomeComponent
  },
  {
    path:"category/:category",
    component:HomeComponent
  },{
    path:"food/:id",
    component:FoodPageComponent
  },{
    path:"cart-page",
    component:CartPageComponent
  }
  ,{
    path:"checkout",
    component:HomeComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
