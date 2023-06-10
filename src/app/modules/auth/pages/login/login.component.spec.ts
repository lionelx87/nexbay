import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { TranslateModule } from '@ngx-translate/core';
import { LoginComponent } from './login.component';

describe('Login component', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        StoreModule.forRoot({}),
        TranslateModule.forRoot({}),
      ],
      declarations: [LoginComponent],
      providers: [],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('login component instance should be created', () => {
    expect(component).toBeTruthy();
  });

  it('username field should be required', () => {
    const usernameField = component.formLogin.get('username');
    usernameField?.setValue('');
    expect(usernameField?.valid).toBeFalsy();
  });

  it('username field should fail on invalid formatting', () => {
    const usernameField = component.formLogin.get('username');
    usernameField?.setValue('test@');
    expect(usernameField?.valid).toBeFalsy();
  });

  it('username field should pass before a valid format', () => {
    const usernameField = component.formLogin.get('username');
    usernameField?.setValue('test@test.com');
    expect(usernameField?.valid).toBeTruthy();
  });

  it('password field should be required', () => {
    const passwordField = component.formLogin.get('password');
    passwordField?.setValue('');
    expect(passwordField?.valid).toBeFalsy();
  });
});
