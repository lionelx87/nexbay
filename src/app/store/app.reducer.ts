import { ActionReducerMap } from '@ngrx/store';
import { UiState, uiReducer } from './ui/ui.reducer';
import { AuthState, authReducer } from './auth/auth.reducer';
import { ListStoreState, listReducer } from './list/list.reducer';

export interface AppState {
  ui: UiState;
  auth: AuthState;
  list: ListStoreState;
}

export const appReducers: ActionReducerMap<AppState> = {
  ui: uiReducer,
  auth: authReducer,
  list: listReducer,
};
