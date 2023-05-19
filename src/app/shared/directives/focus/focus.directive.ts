import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appFocus]',
})
export class FocusDirective implements OnInit {
  constructor(private elementRef: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    const { nativeElement } = this.elementRef;
    nativeElement.focus();
  }
}
