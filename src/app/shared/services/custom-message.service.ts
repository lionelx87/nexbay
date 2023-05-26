import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class CustomMessageService {
  constructor(private messageService: MessageService) {}

  showMessage(details: string) {
    this.messageService.add({
      severity: 'error',
      summary: 'Error',
      detail: details,
    });
  }
}
