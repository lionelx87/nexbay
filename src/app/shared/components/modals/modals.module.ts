import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CreateListModalComponent } from './components/create-list-modal/create-list-modal.component';

import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';
import { InputTextModule } from 'primeng/inputtext';
import { RippleModule } from 'primeng/ripple';
import { ModalService } from './services/modal.service';

@NgModule({
  declarations: [CreateListModalComponent],
  imports: [
    CommonModule,
    DynamicDialogModule,
    InputTextModule,
    ButtonModule,
    RippleModule,
    FormsModule,
  ],
  providers: [DialogService, ModalService],
})
export class ModalsModule {}
