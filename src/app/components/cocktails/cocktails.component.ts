import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cocktails',
  templateUrl: './cocktails.component.html',
  styleUrls: ['./cocktails.component.css']
})
export class CocktailsComponent implements OnInit {

  items = ['q', 'w', 'e', 'r', 't', 'y'];

  constructor() { }

  ngOnInit(): void {
  }

}
