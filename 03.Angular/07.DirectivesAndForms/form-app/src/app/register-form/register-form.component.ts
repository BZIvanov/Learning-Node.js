import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  phoneNumbers: Array<string> = ['+359', '+721', '+123'];
  // ViewChild decorator is used when we will work with html file from the same component
  @ViewChild('form')
  htmlForm: NgForm;

  constructor() { }

  ngOnInit() {
  }

  register(formData) {
    if (!this.htmlForm.invalid) {
      this.htmlForm.reset();
    }
  }

}
