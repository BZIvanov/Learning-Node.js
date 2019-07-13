import { Injectable } from '@angular/core';
import { of as observableOf } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users = [
    {
      id: 1,
      firstName: 'Ivan 1',
      lastName: 'Ivanov 1',
    },
    {
      id: 2,
      firstName: 'Ivan 2',
      lastName: 'Ivanov 2',
    },
    {
      id: 3,
      firstName: 'Ivan 3',
      lastName: 'Ivanov 3',
    }
  ];

  constructor() { }


  load() {
    return observableOf(this.users).pipe(delay(1000)); // return this.http.get('endpoint/api/user')
  }
}
