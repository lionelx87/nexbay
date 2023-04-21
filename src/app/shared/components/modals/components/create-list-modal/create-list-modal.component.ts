import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../services/modal.service';
import { Router } from '@angular/router';
import { ROUTES } from 'src/app/core/constants/routes';

@Component({
  selector: 'app-create-list-modal',
  templateUrl: './create-list-modal.component.html',
  styleUrls: ['./create-list-modal.component.scss'],
})
export class CreateListModalComponent implements OnInit {
  list: string;

  constructor(private modalService: ModalService, private router: Router) {}

  get emptyList(): boolean {
    return this.list.trim().length <= 0;
  }

  ngOnInit(): void {
    this.list = '';
  }

  go() {
    this.router.navigate([ROUTES.LIST]);
    this.close();
  }

  close() {
    this.modalService.close();
  }
}
