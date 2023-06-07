import { createReducer, on } from '@ngrx/store';
import { setUser, unSetUser } from './auth.actions';
import { LoggedUser } from 'src/app/shared/models/user.interface';

export interface AuthState {
  user: LoggedUser | null;
}

export const initialState: AuthState = {
  user: null,
};

const _authReducer = createReducer(
  initialState,
  on(setUser, (state, { user }) => ({ ...state, user: { ...user } })),
  on(unSetUser, state => ({ ...state, user: null }))
);

export function authReducer(state: any, action: any) {
  return _authReducer(state, action);
}
