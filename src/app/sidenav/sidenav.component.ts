import { Component } from '@angular/core';
import { trigger, style, state, transition, animate, query, stagger } from '@angular/animations';

interface MenuItem {
  iconName: string;
  name: string;
  subItems?: MenuItem[];
}

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  animations: [
    trigger('animateWidth', [
      state('void',
        style({
          width: 0
      })),
      state('*',
        style({
          width: '*'
      })),
      transition('void <=> *', animate('900ms cubic-bezier(.6, 0, 0, 1)'))
    ]),
    trigger('listAnimation', [
      transition('* => *', [
        query(':leave', [
          stagger('90ms', [
            animate('900ms cubic-bezier(.6, 0, 0, 1)', style({ opacity: 0, transform: 'translateY(-10px)' }))
          ])
        ], { optional: true }),
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(-10px)' }),
          stagger('90ms', [
            animate('1000ms 400ms cubic-bezier(0, 0, 0, .8)', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class SidenavComponent {
  isOpen = false;
  selectedMenuItem: MenuItem;
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
          iconName: 'work',
          name: 'Work assignments'
        },
        {
          iconName: 'email',
          name: 'Sent assignments'
        },
        {
          iconName: 'add_circle',
          name: 'Add assignment'
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
}
