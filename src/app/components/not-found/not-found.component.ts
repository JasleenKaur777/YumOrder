import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit{
 @Input() visible: boolean = true;
 @Input() notFoundMessage: string = "Oops! The page you're looking for doesn't exist.";
 @Input() resetLinkRoute: string = '/';
 @Input() resetLinkText: string = 'Go back to homepage';
constructor(){}
ngOnInit(): void {}
}
