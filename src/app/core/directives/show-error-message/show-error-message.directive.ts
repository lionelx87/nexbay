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
import { filter } from 'rxjs';

@Directive({
  selector: 'input[appShowErrorMessage]',
})
export class ShowErrorMessageDirective implements OnInit {
  @Input() controlName?: string;

  constructor(
    @Optional() @Self() public ngControl: NgControl,
    private elementRef: ElementRef<HTMLInputElement>,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    this.ngControl.valueChanges?.subscribe(data => {
      this.ngControl.errors
        ? this.showErrorMessage('error')
        : this.removeErrorMessage();
    });
  }

  private showErrorMessage(message: string) {
    const parent = this.elementRef.nativeElement.closest('.p-field');
    const div = this.renderer.createElement('small');
    const text = this.renderer.createText(message);
    this.renderer.appendChild(div, text);
    this.renderer.setAttribute(div, 'class', 'p-error block');
    this.renderer.appendChild(parent, div);
    this.renderer.setStyle(div, 'text-align', 'end');
  }

  private removeErrorMessage() {
    const parent = this.elementRef.nativeElement.closest('.p-field');
    const child = parent?.querySelector('small');
    if (parent && child) {
      this.renderer.removeChild(parent, child);
    }
  }
}
