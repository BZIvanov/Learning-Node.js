import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Player } from '../../interfaces';

@Component({
  selector: 'ett-player-child',
  templateUrl: './player-child.component.html',
  styleUrls: ['./player-child.component.scss']
})
export class PlayerChildComponent implements OnInit {
  @Input() player: Player;
  @Output() emitItUp: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  showInfo() {
    this.emitItUp.emit("player ");
  }
}
