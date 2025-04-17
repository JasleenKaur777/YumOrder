import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchText="";
  constructor(private readonly route:ActivatedRoute,private readonly router:Router){

  }
  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      const str=params['searchItem'];

      if(str){
        this.searchText=str;
        this.searchBtn(this.searchText);
      }
    })


  }
  searchBtn(str: string) {
    this.router.navigate(['/search',str]);

    }
}
