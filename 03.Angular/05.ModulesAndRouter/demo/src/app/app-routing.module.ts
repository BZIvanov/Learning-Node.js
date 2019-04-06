import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { TodoResolver } from './todo.resolver';
import { HomeActivate } from './home.activate';
import { HomeDeactivate } from './home.deactivate';
import { DetailComponent } from './detail/detail.component';
import { ListComponent } from './list/list.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: HomeComponent,
    // canActivate: [HomeActivate],
    // canDeactivate: [HomeDeactivate],

  },
  {
    path: 'about',
    component: AboutComponent,
    children: [
      // {
      //   path: '',
      //   pathMatch: 'full',
      //   redirectTo: 'one'
      // },
      {
        path: 'one', // about/one
        component: OneComponent,
        outlet: 'about'
      },
      {
        path: 'two', // about/two
        component: TwoComponent,
        outlet: 'about'
      },
    ]
  },
  {
    path: 'todo',
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'list'
      },
      {
        path: 'list', // todo/list
        component: ListComponent,
        resolve: [TodoResolver]
      },
      {
        path: 'detail/:id', // todo/detail/:id
        component: DetailComponent
      }
    ]
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
