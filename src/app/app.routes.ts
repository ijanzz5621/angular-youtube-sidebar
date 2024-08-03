import { Route, Routes } from '@angular/router';
import { menuItems, MenuItem } from './modules/menu_items';

// export const routes: Routes = [
//     {
//         path: '',
//         pathMatch: 'full',
//         redirectTo: 'dashboard'
//     },
//     {
//         path: 'dashboard',
//         component: DashboardComponent
//     },
//     {
//         path: 'content',
//         component: ContentComponent,
//         children: [
//             {
//                 path: 'videos',
//                 component: VideosComponent,
//                 children: [
//                     {
//                         path: 'new-videos',
//                         component: NewVideosComponent
//                     }
//                 ]
//             },
//             {
//                 path: 'playlists',
//                 component: PlaylistsComponent
//             },
//             {
//                 path: 'posts',
//                 component: PostsComponent,
//                 children: [
//                     {
//                         path: 'archieve',
//                         component: ArchieveComponent
//                     }
//                 ]
//             }
//         ]
//     },
//     {
//         path: 'analytics',
//         component: AnalyticsComponent
//     },
//     {
//         path: 'comments',
//         component: CommentsComponent
//     }
// ];

const itemToRoute = (i: MenuItem): Route => {
    const route: Route = { path: i.route, component: i.component };
    if (i.subItems) {
        route.children = i.subItems.map((s) => itemToRoute(s));
    }

    return route;
}

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard',
    },
    ...menuItems().map((i: MenuItem) => itemToRoute(i))
]