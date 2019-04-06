import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { HomeComponent } from './home/home.component';

@Injectable({
  providedIn: 'root'
})
export class HomeDeactivate implements CanDeactivate<HomeComponent> {

  constructor() { }

  canDeactivate(
    component: HomeComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot) {
    // return component.textInput.nativeElement.value.length === 0;
    return true;
  }
}
