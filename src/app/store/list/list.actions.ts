import { createAction, props } from "@ngrx/store";

export const createDraft = createAction(
    '[List] Create Draft',
    props<{ draft: string }>()
);