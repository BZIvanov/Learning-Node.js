import { Component, OnInit } from '@angular/core';
import { Player } from '../../interfaces';

@Component({
  selector: 'ett-player-parent',
  templateUrl: './player-parent.component.html',
  styleUrls: ['./player-parent.component.scss']
})
export class PlayerParentComponent implements OnInit {
  players: Player[] = [
    { name: "Biser", goals: 3 },
    { name: "Toni", goals: 2 }
  ];

  text: string = "";

  constructor() { }

  ngOnInit() {
  }

  dataFromChild(idx: number, childText: string) {
    this.text = `${childText} index is ${idx}`;
  }
}
