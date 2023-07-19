import { createReducer, on } from '@ngrx/store';
import { List, ListState } from 'src/app/shared/models/list.interface';
import { createDraft } from './list.actions';

export interface ListStoreState {
  currentList: List | null;
  lists: List[];
}

export const initialState: ListStoreState = {
  currentList: null,
  lists: [],
};

const _listReducer = createReducer(
  initialState,
  on(createDraft, (state, { draft }) => ({
    ...state,
    currentList: {
      id: null,
      name: draft,
      items: [],
      state: ListState.EMPTY,
    },
  }))
);

export function listReducer(state: any, action: any) {
  return _listReducer(state, action);
}
