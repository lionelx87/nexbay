import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ValidatorsService } from 'src/app/shared/services/validators.service';
import { AppState } from 'src/app/store/app.reducer';
import { registerUser } from 'src/app/store/auth/auth.actions';

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
    private store: Store<AppState>
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
        password: ['', [Validators.required, Validators.minLength(6)]],
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
      this.store.dispatch(registerUser({ user: this.formRegister.value }));
    }
  }
}
