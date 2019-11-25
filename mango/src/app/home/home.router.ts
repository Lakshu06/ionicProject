// tslint:disable-next-line: eofline
import { NgModule } from '@angular/core';
import {RouterModule , Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
    {
        path: 'home',
        component : HomePage,
        children: [
            {
              path: '',
              loadChildren: () => import ('../pages/profile/profile.module').then(n => n.ProfilePageModule)
            },
            {
                path: 'notifications',
                loadChildren: () => import ('../pages/notifications/notifications.module').then(n => n.NotificationsPageModule)
              },
              {
                path: 'messages',
                loadChildren: () => import ('../pages/messages/messages.module').then(n => n.MessagesPageModule)
              },
              {
                path: 'settings',
                loadChildren: () => import ('../pages/settings/settings.module').then(n => n.SettingsPageModule)
              }
        ]
    }];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRouter {}
