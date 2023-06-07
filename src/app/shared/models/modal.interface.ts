import { Type } from '@angular/core';
import { CreateListModalComponent } from '../components/modals/components/create-list-modal/create-list-modal.component';

export const Modals = {
  CREATE_LIST: CreateListModalComponent,
  CREATE_PRODUCT: null,
  REMOVE_LIST: null,
};

export interface ModalConfig {
  component: Type<any>;
  title: string;
}
