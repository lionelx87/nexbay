import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CustomRoute } from 'src/app/shared/models/routing.interface';
import { CustomRoutingService } from 'src/app/shared/services/custom-routing.service';
import { AppState } from 'src/app/store/app.reducer';
import { createDraft } from 'src/app/store/list/list.actions';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-create-list-modal',
  templateUrl: './create-list-modal.component.html',
  styleUrls: ['./create-list-modal.component.scss'],
})
export class CreateListModalComponent implements OnInit {
  listName: string;

  constructor(
    private modalService: ModalService,
    private customRoutingService: CustomRoutingService,
    private store: Store<AppState>
  ) {}

  get emptyListName(): boolean {
    return this.listName.trim().length <= 0;
  }

  ngOnInit(): void {
    this.listName = '';
  }

  go(): void {
    if(!this.emptyListName) {
      this.store.dispatch(createDraft({ draft: this.normalizeListName() }));
      this.customRoutingService.go(CustomRoute.LIST);
      this.close();
    }
  }

  normalizeListName(): string {
    return this.listName.trim().toLocaleLowerCase();
  }

  close(): void {
    this.modalService.close();
  }
}
