import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { NgxIonicImageViewerModule } from 'ngx-ionic-image-viewer';
import { IonicModule } from '@ionic/angular';
import { ShowdetailsofitemsPage } from './showdetailsofitems.page';

const routes: Routes = [
  {
    path: '',
    component: ShowdetailsofitemsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    NgxIonicImageViewerModule
  ],
  declarations: [ShowdetailsofitemsPage]
})
export class ShowdetailsofitemsPageModule {}
