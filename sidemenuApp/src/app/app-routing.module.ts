import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  { path: 'card', loadChildren: () => import('./pages/card/card.module').then(m => m.CardPageModule) },
  { path: 'slides', loadChildren: () => import('./pages/slides/slides.module').then(m => m.SlidesPageModule) },
  { path: 'upload-image', loadChildren: () => import('./pages/upload-image/upload-image.module').then(m => m.UploadImagePageModule) },
  {
    path: 'showdetailsofitems', loadChildren: () => import('./pages/showdetailsofitems/showdetailsofitems.module').then(m =>
      m.ShowdetailsofitemsPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
