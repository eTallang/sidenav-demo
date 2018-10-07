export interface MenuItem {
  iconName: string;
  name: string;
  url?: string;
  subItems?: SubMenuGroup[];
}

export interface SubMenuGroup {
  name: string;
  items: SubMenuItem[];
}

export interface SubMenuItem {
    name: string;
    url: string;
}

export const menuItems: MenuItem[] = [
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
