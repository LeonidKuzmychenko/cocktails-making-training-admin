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
        response.map((it) => {
          it.gameModeNames.sort((name1, name2) => this.sortByName(name1.locale, name2.locale));
        });
        this.items = response;
        console.log(response);
      });
  }

  sortByName(name1: string, name2: string): number {
    if (name1 > name2) {
      return 1;
    }
    if (name1 < name2) {
      return -1;
    }
    return 0;
  }

  ngOnInit(): void {
  }

}
