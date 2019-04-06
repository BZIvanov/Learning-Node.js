import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('loginForm', { read: NgForm }) loginForm: NgForm;
  testValue = 'This is a test value';

  constructor() { }

  ngOnInit() {
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngAfterViewInit() {
    this.loginForm.valueChanges.subscribe(console.log);
  }

  onSubmit(value: any) {
    console.log(value);
  }
}
