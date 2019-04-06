import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { uuidValidator } from '../uuid-validator-fn';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;
  addressCount = 1;

  constructor(private fb: FormBuilder) {
    this.buildForm();

    this.form.valueChanges.subscribe(console.log);
  }

  addAddress() {
    const currentFormValue = this.form.value;
    this.addressCount++;
    this.buildForm();
    this.form.patchValue(currentFormValue);
  }

  buildForm() {

    // this.form = new FormGroup({
    //   uuid: new FormControl(null, [uuidValidator('11-')]),
    //   email: new FormControl('Test', [Validators.required, Validators.minLength(10)])
    // });

    this.form = this.fb.group({
      uuid: [null, [uuidValidator('11-')]],
      email: ['Test', [Validators.required, Validators.minLength(10)]],
      addresses: this.fb.array(
        new Array(this.addressCount).fill(null).map((_, index) => (this.fb.group({
          street: ['', [Validators.required]],
          postCode: [null]
        })))
      )
    });
  }

  get emailControl() {
    return this.form.get('email');
  }

  get uuidControl() {
    return this.form.get('uuid');
  }

  get addresses(): FormGroup {
    return this.form.get('addresses') as FormGroup;
  }

  ngOnInit() {
  }

}
