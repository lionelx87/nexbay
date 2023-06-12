import { createReducer } from "@ngrx/store";
import { List } from "src/app/shared/models/list.interface";

export interface ListStoreState {
    draft: List | null;
    lists: List[];
}

export const initialState: ListStoreState = {
    draft: null,
    lists: [],
}

const _listReducer = createReducer(
    initialState,
)

export function listReducer(state: any, action: any) {
    return _listReducer(state, action);
}