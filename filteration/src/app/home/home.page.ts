import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from '../services/main.service';
import  { FilterPipe } from '../filter';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public items: any;
   filterstring : [];
  constructor(public router : Router,
    public mainservice :MainService) {
      this.items = this.mainservice.data;
     
    }
    ngOninit(){
      console.log(this.filterstring);
    }
   
    ionViewWillEnter(){
      this.items;
      this.filterstring = this.mainservice.filteritem;
    
    //  console.log(this.filterstring);
    }
    

  gotoFilterpage(){
    this.router.navigateByUrl('/filterpage');
    
  }
}
