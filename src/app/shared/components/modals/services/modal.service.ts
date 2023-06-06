import { Injectable } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ModalConfig } from '../../../../core/models/modal.interface';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private modalRef: DynamicDialogRef;

  constructor(public dialogService: DialogService) {}

  show(modalConfig: ModalConfig) {
    this.modalRef = this.dialogService.open(modalConfig.component, {
      header: modalConfig.title,
      styleClass: 'modal',
    });
  }

  close() {
    this.modalRef.close();
  }
}
