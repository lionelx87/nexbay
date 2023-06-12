import { createReducer, on } from '@ngrx/store';
import { showLoading, hideLoading } from './experience.actions';

export interface ExperienceState {
  loading: boolean;
}

export const initialState: ExperienceState = {
  loading: false,
};

const _experienceReducer = createReducer(
  initialState,
  on(showLoading, state => ({ ...state, loading: true })),
  on(hideLoading, state => ({ ...state, loading: false }))
);

export function experienceReducer(state: any, action: any) {
  return _experienceReducer(state, action);
}
