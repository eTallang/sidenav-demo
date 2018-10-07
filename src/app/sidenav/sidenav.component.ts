import { Component, ViewChildren, QueryList, ChangeDetectorRef } from '@angular/core';
import { trigger, style, transition, animate, query, stagger } from '@angular/animations';
import { Router } from '@angular/router';

import { MenuItemDirective } from './menu-item.directive';
import { MenuItem, menuItems, SubMenuItem } from './menu-items';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  animations: [
    trigger('listAnimation', [
      transition('* => *', [
        query(':leave', [
          animate('400ms', style({ opacity: 0, transform: 'translateY(0px)' }))
        ], { optional: true }),
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(-14px)' }),
          stagger('40ms', [
            animate('400ms 200ms cubic-bezier(0, 0, 0, .8)', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class SidenavComponent {
  @ViewChildren(MenuItemDirective) subMenuItems: QueryList<MenuItemDirective>;

  isOpen = false;

  menuItems: MenuItem[] = menuItems;
  selectedMenuItem: MenuItem;
  selectedSubMenu: MenuItemDirective;
  hoveredSubMenu: MenuItemDirective;

  constructor(private router: Router, private changeDetectorRef: ChangeDetectorRef) { }

  setSelectedItem(selectedItem: MenuItem): void {
    this.selectedMenuItem = selectedItem;
    if (selectedItem.subItems && selectedItem.subItems.length) {
      const selectedSubMenu = selectedItem.subItems[0].items[0];
      this.router.navigate(['', selectedSubMenu.url]);
      this.changeDetectorRef.detectChanges();
      this.setSelectedSubMenu(selectedSubMenu);
    }
  }

  setSelectedSubMenu(subMenuItem: SubMenuItem): void {
    this.selectedSubMenu = this.subMenuItems.find(i => i.value === subMenuItem);
  }

  setHoveredSubMenu(subMenuItem: SubMenuItem) {
    this.hoveredSubMenu = this.subMenuItems.find(i => i.value === subMenuItem);
  }
}
