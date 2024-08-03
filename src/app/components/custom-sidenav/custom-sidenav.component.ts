import { Component, computed, input, Input, signal } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

import { NgFor, NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuItemComponent } from '../menu-item/menu-item.component';

import { MenuItem, menuItems } from '../../modules/menu_items';

@Component({
  selector: 'app-custom-sidenav',
  standalone: true,
  imports: [
    MatListModule,
    MatIconModule,
    NgFor,
    NgIf,
    RouterModule,
    MenuItemComponent
  ],
  templateUrl: './custom-sidenav.component.html',
  styleUrl: './custom-sidenav.component.css'
})
export class CustomSidenavComponent {

    sideNavCollapsed = signal(false)
    @Input() set collapsed(val: boolean) {
      this.sideNavCollapsed.set(val);
    };

    profilePicSize = computed(() => {
      return this.sideNavCollapsed() ? '32' : '100'
    });
    headerText = computed(() => this.sideNavCollapsed() ? true : false);

    menuItems = menuItems;

}
