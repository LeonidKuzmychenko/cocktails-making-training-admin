import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GameModeDto} from './dto/game-mode-dto';
import {MatDialog} from '@angular/material/dialog';
import {GameModeDialogComponent} from './game-mode-dialog/game-mode-dialog.component';
import {Mode} from './dto/mode';

@Component({
  selector: 'app-modes',
  templateUrl: './modes.component.html',
  styleUrls: ['./modes.component.css']
})
export class ModesComponent implements OnInit {

  items: Mode[] = [];

  constructor(private http: HttpClient, private dialog: MatDialog) {
    // this.http.get<GameModeDto[]>('https://cocktails-making-training.herokuapp.com/modes')
    //   .subscribe((response) => {
    //     response.map((it) => {
    //       it.gameModeNames.sort((name1, name2) => this.sortByName(name1.locale, name2.locale));
    //     });
    //     this.items = response;
    //     console.log(response);
    //   });

    this.http.get<Mode[]>('assets/modes.json').subscribe(data => {
      console.log(typeof data);
      console.log(data);
      this.items = data;
    });
  }

  openDialog(): void {
    console.log('click');
    const dialogRef = this.dialog.open(GameModeDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
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
