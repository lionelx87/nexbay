import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

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
      username: [''],
      password: ['']
    });
  }

  login() {
    if(this.formLogin.valid) {
      console.log(this.formLogin.value);
    }
  }

}
