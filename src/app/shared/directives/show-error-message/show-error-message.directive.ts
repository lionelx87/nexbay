import {
  Directive,
  ElementRef,
  Input,
  OnInit,
  Optional,
  Renderer2,
  Self,
} from '@angular/core';
import { NgControl } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { delay } from 'rxjs';

@Directive({
  selector: 'input[appShowErrorMessage]',
})
export class ShowErrorMessageDirective implements OnInit {
  @Input() controlName?: string;

  constructor(
    @Optional() @Self() public ngControl: NgControl,
    private elementRef: ElementRef<HTMLInputElement>,
    private renderer: Renderer2,
    private translateService: TranslateService
  ) {}

  ngOnInit(): void {
    this.ngControl.valueChanges
      ?.pipe(delay(0))
      .subscribe(_ =>
        this.ngControl.errors
          ? this.showErrorMessage(Object.keys(this.ngControl.errors)[0])
          : this.removeErrorMessage()
      );
  }

  private showErrorMessage(message: string) {
    this.translateService
      .get('forms.errors.' + message)
      .subscribe(translate => {
        this.removeErrorMessage();
        const parent = this.elementRef.nativeElement.closest('.p-field');
        const div = this.renderer.createElement('small');
        const text = this.renderer.createText(translate);
        this.renderer.appendChild(div, text);
        this.renderer.setAttribute(div, 'class', 'p-error block mt-1');
        this.renderer.appendChild(parent, div);
        this.renderer.setStyle(div, 'text-align', 'end');
      });
  }

  private removeErrorMessage() {
    const parent = this.elementRef.nativeElement.closest('.p-field');
    const child = parent?.querySelector('small');
    if (parent && child) {
      this.renderer.removeChild(parent, child);
    }
  }
}
