type ItemListState = 'pending' | 'completed';

type ListState = 'pending' | 'completed';

type Otra = ListState | 'ALGO';

export interface ItemList {
  description: string;
  state: ItemListState;
}

export interface List {
  items: ItemList[];
  state: ListState;
}
