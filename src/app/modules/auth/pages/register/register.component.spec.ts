import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { TranslateModule } from '@ngx-translate/core';
import { RegisterComponent } from './register.component';

describe('Register component', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        StoreModule.forRoot({}),
        TranslateModule.forRoot(),
      ],
      declarations: [RegisterComponent],
      providers: [],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('register component instance should be created', () => {
    expect(component).toBeTruthy();
  });

  it('fullname field should be required', () => {
    const fullnameField = component.formRegister.get('fullname');
    fullnameField?.setValue('');
    expect(fullnameField?.valid).toBeFalsy();
  });

  it('username field should be required', () => {
    const usernameField = component.formRegister.get('username');
    usernameField?.setValue('');
    expect(usernameField?.valid).toBeFalsy();
  });

  it('username field should fail on invalid formatting', () => {
    const usernameField = component.formRegister.get('username');
    usernameField?.setValue('test@');
    expect(usernameField?.valid).toBeFalsy();
  });

  it('username field should pass before a valid format', () => {
    const usernameField = component.formRegister.get('username');
    usernameField?.setValue('test@test.com');
    expect(usernameField?.valid).toBeTruthy();
  });

  it('password field should be required', () => {
    const passwordField = component.formRegister.get('password');
    passwordField?.setValue('');
    expect(passwordField?.valid).toBeFalsy();
  });

  it('password field should not be less than 6 characters', () => {
    const passwordField = component.formRegister.get('password');
    passwordField?.setValue('12345');
    expect(passwordField?.valid).toBeFalsy();
  });

  it('confirm password field should be required', () => {
    const confirmPassworddField = component.formRegister.get('confirmPassword');
    confirmPassworddField?.setValue('');
    expect(confirmPassworddField?.valid).toBeFalsy();
  });

  it('the password and its confirmation should be the same', () => {
    const password = component.formRegister.get('password');
    const confirmPassword = component.formRegister.get('confirmPassword');
    password?.setValue('password');
    confirmPassword?.setValue('otherpassword');
    expect(confirmPassword?.errors).not.toBeNull();
  });
});
