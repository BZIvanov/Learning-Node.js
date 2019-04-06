import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-app-forms';

  currentValue = 0;

  changeHandler(e: any) {
    this.currentValue = +e.target.value;
  }
}
