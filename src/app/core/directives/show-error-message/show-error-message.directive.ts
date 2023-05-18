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
    console.log('S: ', this.elementRef.nativeElement.closest('.p-field'));
    const parent = this.elementRef.nativeElement.closest('.p-field');
    const div = this.renderer.createElement('small');
    const text = this.renderer.createText('Probandoo');
    this.renderer.appendChild(div, text);
    this.renderer.addClass(div, 'p-error');
    this.renderer.addClass(div, 'block');
    this.renderer.appendChild(parent, div);
    this.renderer.setStyle(div, 'text-align', 'end');

    this.ngControl.valueChanges
      ?.pipe(filter(data => !!this.ngControl?.errors))
      .subscribe(data => console.log('DATA: ', this.ngControl));
  }
}
