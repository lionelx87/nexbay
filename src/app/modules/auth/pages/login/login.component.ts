import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.formLogin = this.fb.group({
      username: ['', [ Validators.required ]],
      password: ['', [ Validators.required ]]
    });
  }

  login() {
    if(this.formLogin.valid) {
      console.log(this.formLogin.value);
    }
  }

}
