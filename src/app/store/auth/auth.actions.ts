import { UserCredential } from '@angular/fire/auth';
import { createAction, props } from '@ngrx/store';
import {
  FirebaseAuthError,
  LoggedUser,
  LoginUser,
  RegisterUser,
} from 'src/app/shared/models/user.interface';

export const registerUser = createAction(
  '[User] Register User',
  props<{ user: RegisterUser }>()
);

export const registerUserSuccess = createAction('[User] Register User Success');

export const registerUserFail = createAction(
  '[User] Register User Fail',
  props<{ error: FirebaseAuthError }>()
);

export const loginUser = createAction(
  '[User] Login User',
  props<{ user: LoginUser }>()
);

export const loginUserSuccess = createAction(
  '[User] Login User Success',
  props<{ user: UserCredential }>()
);

export const loginUserFail = createAction(
  '[User] Login User Fail',
  props<{ error: FirebaseAuthError }>()
);

export const setUser = createAction(
  '[User] Set User',
  props<{ user: LoggedUser }>()
);

export const unSetUser = createAction('[User] Unset User');
