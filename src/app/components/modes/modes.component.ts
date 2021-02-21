import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modes',
  templateUrl: './modes.component.html',
  styleUrls: ['./modes.component.css']
})
export class ModesComponent implements OnInit {

  items = ['ddd', 'qqq', 'qwerty', '12345'];

  constructor() { }

  ngOnInit(): void {
  }

}
