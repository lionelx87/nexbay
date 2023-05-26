import { Component, OnInit } from '@angular/core';
import { CustomRoute } from 'src/app/core/models/routing.interface';
import { CustomRoutingService } from 'src/app/core/services/custom-routing.service';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-create-list-modal',
  templateUrl: './create-list-modal.component.html',
  styleUrls: ['./create-list-modal.component.scss'],
})
export class CreateListModalComponent implements OnInit {
  list: string;

  constructor(
    private modalService: ModalService,
    private customRoutingService: CustomRoutingService
  ) {}

  get emptyList(): boolean {
    return this.list.trim().length <= 0;
  }

  ngOnInit(): void {
    this.list = '';
  }

  go() {
    this.customRoutingService.go(CustomRoute.LIST);
    this.close();
  }

  close() {
    this.modalService.close();
  }
}
