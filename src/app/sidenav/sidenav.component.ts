import { Component } from '@angular/core';

interface MenuItem {
  iconName: string;
  name: string;
  subItems?: MenuItem[];
}

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {
  isOpen = true;
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
}
