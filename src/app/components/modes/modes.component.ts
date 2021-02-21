import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GameModeDto} from './dto/game-mode-dto';

@Component({
  selector: 'app-modes',
  templateUrl: './modes.component.html',
  styleUrls: ['./modes.component.css']
})
export class ModesComponent implements OnInit {

  items: GameModeDto[] = [];

  constructor(private http: HttpClient) {
    this.http.get<GameModeDto[]>('https://cocktails-making-training.herokuapp.com/modes')
      .subscribe((response) => {
        // this.items = response.map((it) => it.gameModeNames.filter((it2) => it2.locale === 'EN')[0]).map((it) => it.name);
        this.items = response;
        console.log(response);
      });
  }

  ngOnInit(): void {
  }

}
