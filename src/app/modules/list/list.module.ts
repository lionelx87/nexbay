import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { OrderListModule } from 'primeng/orderlist';
import { MenuModule } from 'src/app/shared/components/layouts/menubar/menubar.module';
import { ListComponent } from './components/list/list.component';
import { ListRoutingModule } from './list-routing.module';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { InputTextModule } from 'primeng/inputtext';
import { TranslateModule } from '@ngx-translate/core';
import { IsEditionModePipe } from './pipes/is-edition-mode.pipe';

@NgModule({
  declarations: [ListPageComponent, ListComponent, IsEditionModePipe],
  imports: [
    CommonModule,
    ListRoutingModule,
    MenuModule,
    OrderListModule,
    ButtonModule,
    RippleModule,
    InputTextModule,
    TranslateModule
  ],
})
export class ListModule {}
