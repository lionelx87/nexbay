import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';
import {
  CustomMessage
} from 'src/app/shared/models/message.interface';

@Injectable({
  providedIn: 'root',
})
export class CustomMessageService {
  constructor(private messageService: MessageService) {}

  showMessage({ type, title, content }: CustomMessage) {
    this.messageService.add({
      severity: type,
      summary: title,
      detail: content,
    });
  }
}
