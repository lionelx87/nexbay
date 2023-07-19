import { Component, Input, OnInit } from '@angular/core';
import { DisplayMode, ItemState, List, ListState } from 'src/app/shared/models/list.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() mode: DisplayMode = DisplayMode.EDITION;

  list: List = {
    id: null,
    name: 'prueba',
    items: [
      // { id: '1', description: 'Item 1', state: ItemState.PENDING},
      // { id: '2', description: 'Item 2', state: ItemState.PENDING},
      // { id: '3', description: 'Item 3', state: ItemState.PENDING},
      // { id: '4', description: 'Item 4', state: ItemState.PENDING},
      // { id: '5', description: 'Item 5', state: ItemState.PENDING},
      // { id: '6', description: 'Item 6', state: ItemState.PENDING},
      // { id: '7', description: 'Item 7', state: ItemState.PENDING},
      // { id: '8', description: 'Item 8', state: ItemState.PENDING},
      // { id: '9', description: 'Item 9', state: ItemState.PENDING},
      // { id: '10', description: 'Item 10', state: ItemState.PENDING},
    ],
    state: ListState.EMPTY
  }

  constructor() { }

  ngOnInit(): void {
    console.log('');
  }

}
