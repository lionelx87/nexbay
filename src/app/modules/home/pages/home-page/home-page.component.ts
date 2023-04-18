import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ModalService } from 'src/app/shared/components/modals/services/modal.service';
import { Modals } from 'src/app/shared/components/modals/types/modals.types';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  items: MenuItem[];

  constructor(private modalService: ModalService) {}

  ngOnInit(): void {
    this.items = [
      {
        label: 'Options',
        items: [
          {
            label: 'Update',
            icon: 'pi pi-refresh',
            command: () => {
              // this.update();
            },
          },
          {
            label: 'Delete',
            icon: 'pi pi-times',
            command: () => {
              // this.delete();
            },
          },
        ],
      },
      {
        label: 'Navigate',
        items: [
          {
            label: 'Angular',
            icon: 'pi pi-external-link',
            url: 'http://angular.io',
          },
          {
            label: 'Router',
            icon: 'pi pi-upload',
            routerLink: '/fileupload',
          },
        ],
      },
    ];
  }

  show() {
    this.modalService.show({
      component: Modals.CREATE_LIST,
      title: 'Nueva Lista',
    });
  }
}
