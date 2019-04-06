import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ITodo } from './interfaces';
import { TodoService } from './todo.service';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TodoResolver implements Resolve<ITodo[]> {

  constructor(private todoService: TodoService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    return this.todoService.load().pipe(tap((todos) => {
      console.log(todos);

    }));
  }
}
