import { Component, ViewChildren, QueryList, ChangeDetectorRef, OnInit } from '@angular/core';
import { trigger, style, transition, animate, query, stagger } from '@angular/animations';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

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
          animate('250ms', style({ opacity: 0, transform: 'translateY(0px)' }))
        ], { optional: true }),
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(-14px)' }),
          stagger('30ms', [
            animate('250ms 200ms cubic-bezier(0, 0, 0, .8)', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class SidenavComponent implements OnInit {
  @ViewChildren(MenuItemDirective) subMenuItems: QueryList<MenuItemDirective>;

  isOpen = false;

  menuItems: MenuItem[] = menuItems;
  selectedMenuItem: MenuItem;
  selectedSubMenu: MenuItemDirective;
  hoveredSubMenu: MenuItemDirective;

  constructor(private router: Router, private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit() {
    this.router.events.pipe(filter(ev => ev instanceof NavigationEnd)).subscribe(() => {
      this.menuItems.forEach(menuItem => {
        if (this.isItemActive(menuItem)) {
          this.selectedMenuItem = menuItem;

          if (menuItem.subItems) {
            const subMenuItems: SubMenuItem[] = [].concat(...menuItem.subItems.map(subItem => subItem.items));
            this.changeDetectorRef.detectChanges();
            const activeSubMenu = this.getMenuDirective(subMenuItems.find(subMenu => this.router.isActive(subMenu.url, false)));
            this.selectedSubMenu = activeSubMenu;
          }
        }
      });
    });
  }

  isItemActive(item: MenuItem): boolean {
    const urls: string[] = [];
    if (item.url) {
      urls.push(item.url);
    } else if (item.subItems) {
      item.subItems.forEach(subItem => subItem.items.forEach(i => urls.push(i.url)));
    }

    return !!urls.find(url => this.router.isActive(url, false));
  }

  setSelectedItem(selectedItem: MenuItem): void {
    this.selectedMenuItem = selectedItem;
    if (selectedItem.subItems && selectedItem.subItems.length) {
      const selectedSubMenu = selectedItem.subItems[0].items[0];
      this.router.navigate(['', selectedSubMenu.url]);
      this.changeDetectorRef.detectChanges();
      this.selectedSubMenu = this.getMenuDirective(selectedSubMenu);
    }
  }

  getMenuDirective(subMenuItem: SubMenuItem): MenuItemDirective {
    return this.subMenuItems.find(i => i.value === subMenuItem);
  }
}
