import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CocktailDto} from './dto/cocktail-dto';

@Component({
  selector: 'app-cocktails',
  templateUrl: './cocktails.component.html',
  styleUrls: ['./cocktails.component.css']
})
export class CocktailsComponent implements OnInit {

  items: CocktailDto[] = [];

  constructor(private http: HttpClient) {
    this.http.get<CocktailDto[]>('assets/cocktails.json').subscribe(data => {
      console.log(typeof data);
      console.log(data);
      this.items = data;
    });
  }

  ngOnInit(): void {
  }

}
