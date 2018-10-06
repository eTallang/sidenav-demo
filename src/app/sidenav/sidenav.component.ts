import { Component, ViewChildren, QueryList } from '@angular/core';
import { trigger, style, state, transition, animate, query, stagger } from '@angular/animations';
import { MenuItemDirective } from './menu-item.directive';

interface MenuItem {
  iconName: string;
  name: string;
  subItems?: SubMenuItem[];
}

interface SubMenuItem {
  name: string;
  items: string[];
}

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  animations: [
    trigger('listAnimation', [
      transition('* => *', [
        query(':leave', [
          stagger('50ms', [
            animate('400ms cubic-bezier(.6, 0, 0, 1)', style({ opacity: 0, transform: 'translateY(-16px)' }))
          ])
        ], { optional: true }),
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(-16px)' }),
          stagger('50ms', [
            animate('500ms 200ms cubic-bezier(0, 0, 0, .8)', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class SidenavComponent {
  @ViewChildren(MenuItemDirective) subMenuItems: QueryList<MenuItemDirective>;

  isOpen = false;
  selectedMenuItem: MenuItem;
  selectedSubMenu: string;
  hoveredItem: MenuItemDirective;
  menuItems: MenuItem[] = [
    {
      iconName: 'home',
      name: 'Home'
    },
    {
      iconName: 'grid_on',
      name: 'Sheets'
    },
    {
      iconName: 'assignment',
      name: 'Assignments',
      subItems: [
        {
          name: 'Assignments',
          items: [ 'Work assignments', 'Sent assignments', 'Add assignment' ]
        },
        {
          name: 'Private',
          items: [ 'Personal stuff', 'Some other stuff'  ]
        },
        {
          name: 'Third option',
          items: [ 'Some other menu item', 'Final item' ]
        }
      ]
    },
    {
      iconName: 'favorite',
      name: 'Favorites'
    },
    {
      iconName: 'account_circle',
      name: 'Profile'
    }
  ];

  toggleExpansion(): void {
    this.isOpen = !this.isOpen;
  }

  setSelectedItem(selectedItem: MenuItem): void {
    this.selectedMenuItem = selectedItem;
  }

  setHoveredItem(item: string) {
    this.hoveredItem = this.subMenuItems.find(i => i.value === item);
  }

  setFirstSubItemActive(phaseName: string) {
    if (phaseName === 'done') {
      const firstItem = this.selectedMenuItem.subItems[0].items[0];
      this.setHoveredItem(firstItem);
      this.selectedSubMenu = firstItem;
    }
  }
}
