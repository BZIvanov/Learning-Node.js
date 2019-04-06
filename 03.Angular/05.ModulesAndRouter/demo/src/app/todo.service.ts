import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ITodo } from './interfaces';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  load() {
    return this.http.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos');
  }

  loadOne(id: number) {
    return this.http.get<ITodo>(`https://jsonplaceholder.typicode.com/todos/${id}`);
  }
}
