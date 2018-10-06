import { Directive, ElementRef, Input, HostBinding } from '@angular/core';

@Directive({
  selector: '[appMenuItem]'
})
export class MenuItemDirective {
  @HostBinding('class.active') get activeClass() { return this.selected; }
  @Input() selected: boolean;
  @Input() value: string;

  get height(): number {
    return this.elementRef.nativeElement.clientHeight;
  }

  get offset(): number {
    return this.elementRef.nativeElement.offsetTop;
  }

  constructor(private elementRef: ElementRef<HTMLElement>) { }
}
