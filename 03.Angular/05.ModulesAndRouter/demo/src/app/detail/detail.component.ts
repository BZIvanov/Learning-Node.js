import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoService } from '../todo.service';
import { ITodo } from '../interfaces';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  todo: ITodo = null;
  constructor(private activatedRoute: ActivatedRoute, private todoService: TodoService) {
    console.log(activatedRoute.snapshot.params.id);

  }

  ngOnInit() {
    this.todoService.loadOne(this.activatedRoute.snapshot.params.id).subscribe(todo => {
      this.todo = todo;
    });
  }

}
