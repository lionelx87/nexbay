import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { DisplayMode, List } from 'src/app/shared/models/list.interface';
import { AppState } from 'src/app/store/app.reducer';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() mode: DisplayMode = DisplayMode.EDITION;
  list$: Observable<List | null>;
  
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.list$ = this.store.select('list').pipe(
      map(({ currentList }) => currentList)
    );
  }

}
