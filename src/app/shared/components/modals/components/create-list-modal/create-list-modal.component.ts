import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-create-list-modal',
  templateUrl: './create-list-modal.component.html',
  styleUrls: ['./create-list-modal.component.scss'],
})
export class CreateListModalComponent implements OnInit {
  list: string;

  constructor(private modalService: ModalService) {}

  get emptyList(): boolean {
    return this.list.trim().length <= 0;
  }

  ngOnInit(): void {
    this.list = '';
  }

  close() {
    this.modalService.close();
  }
}
