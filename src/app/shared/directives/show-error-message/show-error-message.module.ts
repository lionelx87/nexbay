import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowErrorMessageDirective } from './show-error-message.directive';

@NgModule({
  declarations: [ShowErrorMessageDirective],
  imports: [CommonModule],
  exports: [ShowErrorMessageDirective],
})
export class ShowErrorMessageModule {}
