import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ValidatorsService } from 'src/app/core/services/validators.service';
import { AppState } from 'src/app/store/app.reducer';
import { loginUser } from 'src/app/store/auth/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup;

  constructor(
    private fb: FormBuilder,
    private validatorsService: ValidatorsService,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.formLogin = this.fb.group({
      username: [
        '',
        [
          Validators.required,
          Validators.pattern(this.validatorsService.emailPattern),
        ],
      ],
      password: ['', [Validators.required]],
    });
  }

  login() {
    if (this.formLogin.valid) {
      this.store.dispatch(loginUser({ user: this.formLogin.value }));
    }
  }
}
