import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IngredientDto} from './dto/ingredient-dto';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css']
})
export class IngredientsComponent implements OnInit {

  items: IngredientDto[] = [];

  constructor(private http: HttpClient) {
    this.http.get<IngredientDto[]>('assets/ingredients.json').subscribe(data => {
      console.log(typeof data);
      console.log(data);
      this.items = data;
    });
  }

  ngOnInit(): void {
  }

}
