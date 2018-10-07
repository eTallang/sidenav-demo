import { Component, ViewChildren, QueryList } from '@angular/core';
import { trigger, style, transition, animate, query, stagger } from '@angular/animations';
import { MenuItemDirective } from './menu-item.directive';

interface MenuItem {
  iconName: string;
  name: string;
  url?: string;
  subItems?: SubMenuItem[];
}

interface SubMenuItem {
  name: string;
  items: {
    name: string;
    url: string;
  }[];
}

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
  selectedMenuItem: MenuItem;
  selectedSubMenu: string;
  hoveredItem: MenuItemDirective;
  menuItems: MenuItem[] = [
    {
      iconName: 'home',
      name: 'Home',
      url: 'dashboard'
    },
    {
      iconName: 'grid_on',
      name: 'Sheets',
      url: 'sheets'
    },
    {
      iconName: 'assignment',
      name: 'Assignments',
      subItems: [
        {
          name: 'Assignments',
          items: [
            {
              name: 'Work assignments',
              url: 'work-assignments'
            },
            {
              name: 'Sent assignments',
              url: 'sent-assignments'
            },
            {
              name: 'Add assignment',
              url: 'add-assignment'
            }
          ]
        },
        {
          name: 'Private',
          items: [
            {
              name: 'Personal stuff',
              url: 'personal-stuff'
            },
            {
              name: 'Some other stuff',
              url: 'some-other-stuff'
            }
          ]
        },
        {
          name: 'Third option',
          items: [
            {
              name: 'Some other menu item',
              url: 'some-other-menu-item'
            },
            {
              name: 'Final item',
              url: 'final-item'
            }
          ]
        }
      ]
    },
    {
      iconName: 'favorite',
      name: 'Favorites',
      url: 'favorites'
    },
    {
      iconName: 'account_circle',
      name: 'Profile',
      url: 'profile'
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
}
