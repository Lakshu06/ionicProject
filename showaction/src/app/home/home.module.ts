import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule , Routes} from '@angular/router';
import { HomePage } from './home.page';
import { HomeRouter } from './home.router';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeRouter
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
