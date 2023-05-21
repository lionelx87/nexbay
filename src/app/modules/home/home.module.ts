import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TranslateModule } from '@ngx-translate/core';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { ModalsModule } from 'src/app/shared/components/modals/modals.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MenuModule } from 'src/app/shared/components/layouts/menubar/menubar.module';

@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    TranslateModule,
    AngularSvgIconModule,
    ButtonModule,
    RippleModule,
    ModalsModule,
    MenuModule,
  ],
})
export class HomeModule {}
