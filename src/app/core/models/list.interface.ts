enum ItemStates {
  PENDING = 'pending',
  COMPLETED = 'completed',
}

enum ListItemStates {
  PENDING = 'pending',
  COMPLETED = 'completed',
}

type ItemListState = ItemStates.PENDING | ItemStates.COMPLETED;

type ListState = ListItemStates.PENDING | ListItemStates.COMPLETED;

export interface ItemList {
  description: string;
  state: ItemListState;
}

export interface List {
  items: ItemList[];
  state: ListState;
}
