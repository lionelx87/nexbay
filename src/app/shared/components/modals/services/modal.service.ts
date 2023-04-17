import { Inject, Injectable, Injector } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { CreateListModalComponent } from '../components/create-list-modal/create-list-modal.component';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  constructor(public dialogService: DialogService) {}

  show() {
    const ref = this.dialogService.open(CreateListModalComponent, {
      header: 'Nueva Lista',
      width: '50%',
    });
  }
}
