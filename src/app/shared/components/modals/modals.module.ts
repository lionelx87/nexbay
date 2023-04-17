import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CreateListModalComponent } from './components/create-list-modal/create-list-modal.component';

import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';
import { ModalService } from './services/modal.service';

@NgModule({
  declarations: [CreateListModalComponent],
  imports: [CommonModule, DynamicDialogModule],
  providers: [DialogService, ModalService],
})
export class ModalsModule {}
