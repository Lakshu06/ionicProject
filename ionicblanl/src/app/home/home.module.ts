import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {ShowpagePageModule} from '../pages/showpage/showpage.module';
import { HomePage } from './home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      },
      {
        path: 'showpage',
        loadChildren: () => import ('../pages/showpage/showpage.module').then(n => n.ShowpagePageModule)
      },
    ])
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
