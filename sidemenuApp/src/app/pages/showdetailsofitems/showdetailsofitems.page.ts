import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {MainService} from '../../_services/main.service';


@Component({
  selector: 'app-showdetailsofitems',
  templateUrl: './showdetailsofitems.page.html',
  styleUrls: ['./showdetailsofitems.page.scss'],
})
export class ShowdetailsofitemsPage implements OnInit {
 itemDetails :any;
  images = ['1.jpeg', '2.jpeg', '3.jpg', '4.jpg', '5.jpg', '6.jpg'];
    constructor(
    private route: ActivatedRoute,
     private router: Router,
     private mainService: MainService ){}

  ngOnInit() {
    this.itemDetails = this.mainService.currentData;
    console.log(this.itemDetails);
    }

  backtohome() {
    this.router.navigateByUrl('/card');
  }

}
