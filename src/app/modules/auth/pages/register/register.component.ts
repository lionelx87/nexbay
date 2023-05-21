import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from 'src/app/core/services/validators.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  formRegister: FormGroup;

  constructor(
    private fb: FormBuilder,
    private validatorsService: ValidatorsService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.formRegister = this.fb.group(
      {
        fullname: ['', [Validators.required]],
        username: [
          '',
          [
            Validators.required,
            Validators.pattern(this.validatorsService.emailPattern),
          ],
        ],
        password: ['', [Validators.required]],
        confirmPassword: ['', [Validators.required]],
      },
      {
        validators: [
          this.validatorsService.confirmationPassword(
            'password',
            'confirmPassword'
          ),
        ],
      }
    );
  }

  register() {
    if (this.formRegister.valid) {
      console.log(this.formRegister.value);
      this.authService
        .register(this.formRegister.value)
        .subscribe(data => console.log('DATA: ', data));
    }
  }
}
