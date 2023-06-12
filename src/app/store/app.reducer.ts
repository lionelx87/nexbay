import { ActionReducerMap } from '@ngrx/store';
import { ExperienceState, experienceReducer } from './experience/experience.reducer';
import { AuthState, authReducer } from './auth/auth.reducer';
import { ListStoreState, listReducer } from './list/list.reducer';

export interface AppState {
  experience: ExperienceState;
  auth: AuthState;
  list: ListStoreState;
}

export const appReducers: ActionReducerMap<AppState> = {
  experience: experienceReducer,
  auth: authReducer,
  list: listReducer,
};
