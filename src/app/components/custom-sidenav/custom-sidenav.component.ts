import { Component, computed, Input, signal } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

import { NgFor, NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuItemComponent } from '../menu-item/menu-item.component';

export type MenuItem = {
  icon: string;
  label: string;
  route?: string;
  subItems?: MenuItem[];
}

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

    menuItems = signal<MenuItem[]>([
      {
        icon: 'dashboard',
        label: 'Dashboard',
        route: 'dashboard'
      },
      {
        icon: 'video_library',
        label: 'Content',
        route: 'content',
        subItems: [
          {
            icon: 'play_circle',
            label: 'Videos',
            route: 'videos'
          },
          {
            icon: 'playlist_play',
            label: 'Playlists',
            route: 'playlists'
          },
          {
            icon: 'post_add',
            label: 'Posts',
            route: 'posts'
          }          
        ]
      },
      {
        icon: 'analytics',
        label: 'Analytics',
        route: 'analytics'
      },
      {
        icon: 'comment',
        label: 'Comments',
        route: 'comments'
      }
    ]);

    sideNavCollapsed = signal(false)
    @Input() set collapsed(val: boolean) {
      this.sideNavCollapsed.set(val);
    };

    profilePicSize = computed(() => {
      return this.sideNavCollapsed() ? '32' : '100'
    });
    headerText = computed(() => this.sideNavCollapsed() ? true : false);

}
