import { Component, computed, effect, input, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';

import { animate, style, transition, trigger } from '@angular/animations';
import { MenuItem } from '../../modules/menu_items';

@Component({
  selector: 'app-menu-item',
  standalone: true,
  imports: [
    MatListModule,
    RouterModule,
    MatIconModule
  ],
  animations: [
    trigger('expandContractMenu', [
      transition(':enter', [
        style({opacity: 0, height: '0px'}),
        animate('500ms ease-in-out', style({opacity: 1, height: '*'}))
      ]),
      transition(':leave', [
        animate('500ms ease-in-out', style({opacity: 0, height: '0px'}))
      ])
    ])
  ],
  templateUrl: './menu-item.component.html',
  styleUrl: './menu-item.component.css'
})
export class MenuItemComponent {

  collapsed = input(false);
  item = input.required<MenuItem>();
  routeHistory = input('');

  level = computed(() => this.routeHistory().split('/').length - 1)
  indentation = computed(() => this.collapsed() ? '16px' : `${(16 + (this.level() * 16))}px`)

  // nested menu capabilities
  nestedMenuOpen = signal(false);

  toggleNested() {
    if (!this.item().subItems) {
      return;
    } 
    console.log('nestedMenuOpen value: ', this.nestedMenuOpen())
    this.nestedMenuOpen.set(!this.nestedMenuOpen())
  };

  logRoutes = effect(() => console.log(this.routeHistory()));
}
