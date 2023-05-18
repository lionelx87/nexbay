import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { RippleModule } from 'primeng/ripple';
import { FocusDirectiveModule } from 'src/app/core/directives/focus/focus-directive.module';
import { ShowErrorMessageModule } from 'src/app/core/directives/show-error-message/show-error-message.module';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    TranslateModule,
    CardModule,
    InputTextModule,
    ButtonModule,
    RippleModule,
    RouterModule,
    FocusDirectiveModule,
    ReactiveFormsModule,
    ShowErrorMessageModule,
  ],
})
export class AuthModule {}
