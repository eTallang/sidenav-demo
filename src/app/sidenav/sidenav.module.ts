import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SidenavComponent } from './sidenav.component';
import { MenuItemDirective } from './menu-item.directive';
import { FocusArrowComponent } from './focus-arrow/focus-arrow.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [ SidenavComponent, MenuItemDirective, FocusArrowComponent ],
  exports: [ SidenavComponent ]
})
export class SidenavModule { }
