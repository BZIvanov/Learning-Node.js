import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  error: string;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  submitHandler(form: NgForm) {
    const { password, email, name } = form.value;
    this.authService.signup(password, name, email).subscribe(_ => {
      this.router.navigate(['signin']);
    }, err => {
      console.error(err);
    });
  }

}
