import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appColorblue]'
})
export class ColorblueDirective {
  element: ElementRef;

  constructor(element: ElementRef) {
    this.element = element;
    element.nativeElement.style.color = 'blue';
  }

  @HostListener('mouseenter')
  mouseenterListener() {
    this.element.nativeElement.style.color = 'green';
  }

  @HostListener('mouseleave')
  mouseleaveListener() {
    this.element.nativeElement.style.color = 'blue';
  }
}
