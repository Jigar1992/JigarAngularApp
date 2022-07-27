import { Directive } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appCustomValidation]'
})
export class CustomValidationDirective {

  constructor() { }
 
  static validateCcNumber(control: FormControl): ValidationErrors {
    debugger
    // Here goes the validation code mentioned earlier
    if (control.value && (control.value.length > 10) || (!/^([^0-9]*)$/.test(control.value))) {
          return { 'valid': true };
        }
    return { 'valid': false   };
        
  }
}