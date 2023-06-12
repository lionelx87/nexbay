import { createReducer, on } from '@ngrx/store';
import { List, ListState } from 'src/app/shared/models/list.interface';
import { createDraft } from './list.actions';

export interface ListStoreState {
  draft: List | null;
  lists: List[];
}

export const initialState: ListStoreState = {
  draft: null,
  lists: [],
};

const _listReducer = createReducer(
  initialState,
  on(createDraft, (state, { draft }) => ({
    ...state,
    draft: {
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
