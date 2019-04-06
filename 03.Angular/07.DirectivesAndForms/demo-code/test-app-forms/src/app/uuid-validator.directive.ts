import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';
import { Directive } from '@angular/core';
import { uuidValidator } from './uuid-validator-fn';

@Directive({
  selector: '[appUuidValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: UuidValidatorDirective,
      multi: true
    }
  ]
})
export class UuidValidatorDirective implements Validator {

  validate(control: AbstractControl) {
    return uuidValidator()(control);
  }

}
