import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MenuModule } from 'src/app/shared/components/layouts/menubar/menubar.module';
import { ListRoutingModule } from './list-routing.module';
import { ListPageComponent } from './pages/list-page/list-page.component';

@NgModule({
  declarations: [ListPageComponent],
  imports: [CommonModule, ListRoutingModule, MenuModule],
})
export class ListModule {}
