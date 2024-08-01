import { Component, signal } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

import { NgFor } from '@angular/common';

export type MenuItem = {
  icon: string;
  label: string;
  route?: string;
}

@Component({
  selector: 'app-custom-sidenav',
  standalone: true,
  imports: [
    MatListModule,
    MatIconModule,
    NgFor
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
        route: 'content'
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
}
