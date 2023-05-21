import { ActionReducerMap } from '@ngrx/store';
import { UiState, uiReducer } from './ui/ui.reducer';
import { AuthState, authReducer } from './auth/auth.reducer';

export interface AppState {
  ui: UiState;
  auth: AuthState;
}

export const appReducers: ActionReducerMap<AppState> = {
  ui: uiReducer,
  auth: authReducer,
};
