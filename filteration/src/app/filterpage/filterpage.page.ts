import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from '../services/main.service';
import { debugOutputAstAsTypeScript } from '@angular/compiler';

@Component({
  selector: 'app-filterpage',
  templateUrl: 'filterpage.page.html',
  styleUrls: ['filterpage.page.scss'],
})
export class FilterpagePage {
    dataFilter :any ;
    updatedData: any;
 
constructor(public mainservice : MainService,
    public router: Router){
this.dataFilter = this.mainservice.data;
}
  
  eventFunction(event){
      this.updatedData = event.detail.value ;
       
   }


    backtohomepage(){
        this.router.navigateByUrl('home');
    }
       
    Apply(){
        
       this.mainservice.filteritem= this.updatedData;
       this.router.navigateByUrl('/home');
    }
    clear(){
      
        console.log("cleared filter");
        debugger;
        this.router.navigateByUrl('/home');
    }
    

}