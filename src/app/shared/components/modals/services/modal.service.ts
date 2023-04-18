import { Inject, Injectable, Injector, Type } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { CreateListModalComponent } from '../components/create-list-modal/create-list-modal.component';
import { ModalConfig } from '../types/modals.types';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  constructor(public dialogService: DialogService) {}

  show(modalConfig: ModalConfig) {
    const ref = this.dialogService.open(modalConfig.component, {
      header: modalConfig.title,
      width: '50%',
    });
  }
}
