import { Pipe, PipeTransform } from '@angular/core';
import { DisplayMode } from 'src/app/shared/models/list.interface';

@Pipe({
  name: 'isEditionMode'
})
export class IsEditionModePipe implements PipeTransform {

  transform(mode: DisplayMode): boolean {
    return mode === DisplayMode.EDITION;
  }

}
