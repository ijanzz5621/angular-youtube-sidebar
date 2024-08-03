import { signal, Type } from "@angular/core";
import { DashboardComponent } from "../pages/dashboard/dashboard.component";
import { ContentComponent } from "../pages/content/content.component";
import { AnalyticsComponent } from "../pages/analytics/analytics.component";
import { CommentsComponent } from "../pages/comments/comments.component";
import { ArchieveComponent } from "../pages/content/posts/archieve/archieve.component";
import { PostsComponent } from "../pages/content/posts/posts.component";
import { PlaylistsComponent } from "../pages/content/playlists/playlists.component";
import { NewVideosComponent } from "../pages/content/videos/new-videos/new-videos.component";
import { VideosComponent } from "../pages/content/videos/videos.component";

export type MenuItem = {
    icon: string;
    label: string;
    route?: string;
    queryParam?: string;
    subItems?: MenuItem[];
    component?: Type<unknown>;
  }

  export const menuItems = signal<MenuItem[]>([
    {
      icon: 'dashboard',
      label: 'Dashboard',
      route: 'dashboard',
      component: DashboardComponent
    },
    {
      icon: 'video_library',
      label: 'Content',
      route: 'content',
      subItems: [
        {
          icon: 'play_circle',
          label: 'Videos',
          route: 'videos',
          subItems: [
            {
              icon: 'videocam',
              label: 'New Videos',
              route: 'new-videos',
              component: NewVideosComponent
            }
          ],
          component: VideosComponent
        },
        {
          icon: 'playlist_play',
          label: 'Playlists',
          route: 'playlists',
          component: PlaylistsComponent
        },
        {
          icon: 'post_add',
          label: 'Posts',
          route: 'posts',
          subItems: [
            {
              icon: 'folder_open',
              label: 'Archieve',
              route: 'archieve',
              component: ArchieveComponent
              // subItems: [
              //   {
              //     icon: 'calendar_month',
              //     label: '2024',
              //     route: 'archieve',
              //     queryParam: '{year: 2024}'
              //   },
              //   {
              //     icon: 'calendar_month',
              //     label: '2023',
              //     route: 'archieve?year=2023'
              //   },
              //   {
              //     icon: 'calendar_month',
              //     label: '2022',
              //     route: 'archieve?year=2022'
              //   }
              // ]
            }
          ],
          component: PostsComponent
        }          
      ],
      component: ContentComponent
    },
    {
      icon: 'analytics',
      label: 'Analytics',
      route: 'analytics',
      component: AnalyticsComponent
    },
    {
      icon: 'comment',
      label: 'Comments',
      route: 'comments',
      component: CommentsComponent
    }
  ]); 
