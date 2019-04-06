import { AbstractControl } from '@angular/forms';

export function uuidValidator(config?: string) {
  return function uuidValidatorFn(control: AbstractControl) {
    return (!control.value || !control.value.startsWith(config || '00-')) ? { invalidUUID: true } : null;
  };
}
