import { Component, input, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { MenuItem } from '../custom-sidenav/custom-sidenav.component';

import { animate, style, transition, trigger } from '@angular/animations';

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

  collapsed = input(false)
  item = input.required<MenuItem>()

  // nested menu capabilities
  nestedMenuOpen = signal(false)

  toggleNested() {
    if (!this.item().subItems) {
      return;
    } 
    console.log('nestedMenuOpen value: ', this.nestedMenuOpen())
    this.nestedMenuOpen.set(!this.nestedMenuOpen())
  }
}
