export class Food{
  id!:number;
  name!:string;
cookingTime!: any;
price!: any;
favourite:boolean=false;
  stars:number=0;
  imageUrl:string="";
  tags:string[]=[];
  origins:string[]=[];
  // constructor(id:number,name:string,cookingTime:any,price:any,favourite:boolean,stars:number,imageUrl:string,tags:string[],origins:string[]){
  //   this.id=id;
  //   this.name=name;
  //   this.cookingTime=cookingTime;
  //   this.price=price;
  //   this.favourite=favourite;
  //   this.stars=stars;
  //   this.imageUrl=imageUrl;
  //   this.tags=tags;
  //   this.origins=origins;
  // }

}
