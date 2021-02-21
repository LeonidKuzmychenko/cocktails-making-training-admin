import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css']
})
export class IngredientsComponent implements OnInit {

  items = ['1', '2', '3', '4', '5', '6', '7'];

  constructor() { }

  ngOnInit(): void {
  }

}
