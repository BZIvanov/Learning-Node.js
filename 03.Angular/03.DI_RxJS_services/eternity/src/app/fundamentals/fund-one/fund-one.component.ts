import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ett-fund-one',
  templateUrl: './fund-one.component.html',
  styleUrls: ['./fund-one.component.scss']
})
export class FundOneComponent implements OnInit {
  surname: string = "Ivanova";
  title: string = "manager"

  constructor() { }

  ngOnInit() {
  }

  showText(text: string) {
    console.log(text);
  }
}
