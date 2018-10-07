import { Component, Input, OnChanges } from '@angular/core';
import { MenuItemDirective } from '../menu-item.directive';

@Component({
  selector: 'app-focus-arrow',
  templateUrl: './focus-arrow.component.html',
  styleUrls: ['./focus-arrow.component.scss']
})
export class FocusArrowComponent implements OnChanges {
  @Input() hoveredItem: MenuItemDirective;
  @Input() selectedItem: MenuItemDirective;
  selectedItemHeight: string;
  selectedItemOffset: string;

  ngOnChanges() {
    if (this.hoveredItem) {
      this.selectedItemHeight = this.transformToPixelValue(this.hoveredItem.height);
      this.selectedItemOffset = this.transformToPixelValue(this.hoveredItem.offset);
    } else if (this.selectedItem) {
      this.selectedItemHeight = this.transformToPixelValue(this.selectedItem.height);
      this.selectedItemOffset = this.transformToPixelValue(this.selectedItem.offset);
    }
  }

  private transformToPixelValue(val: number): string {
    return `${val}px`;
  }
}
