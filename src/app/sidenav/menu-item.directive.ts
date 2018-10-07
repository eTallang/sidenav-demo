import { Directive, ElementRef, Input } from '@angular/core';
import { SubMenuItem } from './menu-items';

@Directive({
  selector: '[appMenuItem]'
})
export class MenuItemDirective {
  @Input() value: SubMenuItem;

  get height(): number {
    return this.elementRef.nativeElement.clientHeight;
  }

  get offset(): number {
    return this.elementRef.nativeElement.offsetTop;
  }

  constructor(private elementRef: ElementRef<HTMLElement>) { }
}
