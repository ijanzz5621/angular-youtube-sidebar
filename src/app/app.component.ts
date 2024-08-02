import { Component, computed, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule} from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav'; 

import { CustomSidenavComponent } from './components/custom-sidenav/custom-sidenav.component';
import { AnalyticsComponent } from './pages/analytics/analytics.component';
import { CommentsComponent } from './pages/comments/comments.component';
import { ContentComponent } from './pages/content/content.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    CustomSidenavComponent,

    AnalyticsComponent,
    CommentsComponent,
    ContentComponent,
    DashboardComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular Youtube Sidebar';

  collapsed = signal(false)
  sidenavWidth = computed(() =>  this.collapsed() ? '65px' : '250px')

}
