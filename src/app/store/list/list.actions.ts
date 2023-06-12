import { createAction, props } from "@ngrx/store";
import { List } from "src/app/shared/models/list.interface";

export const createDraft = createAction(
    '[List] Create Draft',
    props<{ draft: string }>()
);