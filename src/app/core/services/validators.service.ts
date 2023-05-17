import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ValidatorsService {
  public emailPattern: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';

  constructor() {}

  confirmationPassword(password: string, confirmPassword: string) {
    return (formGroup: AbstractControl): ValidationErrors | null => {
      const passwordValue = formGroup.get(password)?.value;
      const confirmPasswordValue = formGroup.get(confirmPassword)?.value;
      if (passwordValue != confirmPasswordValue) {
        formGroup.get(confirmPassword)?.setErrors({ notEqual: true });
        return {
          notEqual: true,
        };
      }
      formGroup.get(confirmPassword)?.setErrors(null);
      return null;
    };
  }
}
