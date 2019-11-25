import { NgModule } from '@angular/core';
import {RouterModule , Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
    {
        path: 'home',
        component : HomePage,
        children: [
            {
              path: 'show-button',
              loadChildren: () => import ('../pages/show-button/show-button.module').then(n => n.ShowButtonPageModule)
            },
                 ]
    }];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRouter {}
