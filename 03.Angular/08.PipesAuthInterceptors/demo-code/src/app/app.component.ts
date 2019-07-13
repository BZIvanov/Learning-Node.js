import { Component } from '@angular/core';
// import { zip as observableZip, Subscription, Observable, Subject, of } from 'rxjs';
// import { UserService } from './user.service';
// import { PostService } from './post.service';
// import { takeUntil } from 'rxjs/operators';
// import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // users$: Observable<any[]>;
  // posts$: Observable<any[]>;
  // isAlive$: Subject<any> = new Subject<any>();
  // subscription: Subscription;
  // // now = new Date();
  // // obj = {
  // //   firstName: 'Ivan',
  // //   lastName: 'Ivanov',
  // // };


  // constructor(
  //   private http: HttpClient,
  //   private userService: UserService,
  //   private postService: PostService
  // ) {

  //   this.http.get('https://jsonplaceholder.typicode.com/todos/').subscribe(todos => {
  //     console.log(todos);
  //   });
  //   this.users$ = this.userService.load();
  //   this.posts$ = this.postService.load();

  //   this.subscription = observableZip(
  //     this.userService.load(),
  //     this.postService.load()
  //   ).pipe(takeUntil(this.isAlive$)).subscribe(([users, posts]) => {
  //     // this.users = users;
  //     // this.posts = posts;
  //   });
  // }


  // getUserPostCount(userId: number) {
  //   return this.posts.reduce((acc, curr) => {
  //     if (curr.userId === userId) { return acc + 1; }
  //     return acc;
  //   }, 0);
  // }

  // clickHandler() {
  //   this.posts = this.posts.concat({
  //     id: 3,
  //     userId: 1,
  //     title: 'Post 3'
  //   });
  // }

  // tslint:disable-next-line:use-life-cycle-interface
  // ngOnDestroy() {
  //   this.subscription.unsubscribe();
  //   this.isAlive$.next(); this.isAlive$.complete();
  // }
}
