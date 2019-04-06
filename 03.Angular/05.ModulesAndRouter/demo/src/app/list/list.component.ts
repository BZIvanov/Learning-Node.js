import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ITodo } from '../interfaces';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @ViewChild('text') textInput: ElementRef;

  todos: ITodo[];


  constructor(private activatedRoute: ActivatedRoute) {
    this.todos = this.activatedRoute.snapshot.data[0];
  }

  ngOnInit() {
  }

}
