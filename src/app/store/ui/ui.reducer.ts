import { createReducer, on } from '@ngrx/store';
import { showLoading, hideLoading } from './ui.actions';

export interface UiState {
  loading: boolean;
}

export const initialState: UiState = {
  loading: false,
};

const _uiReducer = createReducer(
  initialState,
  on(showLoading, state => ({ ...state, loading: true })),
  on(hideLoading, state => ({ ...state, loading: false }))
);

export function uiReducer(state: any, action: any) {
  return _uiReducer(state, action);
}
