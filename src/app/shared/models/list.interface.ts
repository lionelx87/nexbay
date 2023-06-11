export const enum ListState {
  PENDING = 'pending',
  COMPLETED = 'completed',
}

export const enum ItemState {
  PENDING = 'pending',
  COMPLETED = 'completed',
}

export interface Item {
  description: string;
  state: ItemState;
}

export interface List {
  name: string;
  items: Item[];
  state: ListState;
}

export const enum DisplayMode {
  EDITION,
  LIVE,
}

export interface ListViewer {
  list: List;
  mode: DisplayMode;
}
