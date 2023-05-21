import { ActionReducerMap } from '@ngrx/store';
import { UiState, uiReducer } from './ui/ui.reducer';

export interface AppState {
  ui: UiState;
}

export const appReducers: ActionReducerMap<AppState> = {
  ui: uiReducer,
};
