import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-showdetailsofitems',
  templateUrl: './showdetailsofitems.page.html',
  styleUrls: ['./showdetailsofitems.page.scss'],
})
export class ShowdetailsofitemsPage implements OnInit {
  getValue: any;
  images = ['1.jpeg', '2.jpeg', '3.jpg', '4.jpg', '5.jpg', '6.jpg'];
  constructor(public router: Router) { }

  ngOnInit() {
    // // this.getValue = this._router.snapshot.paramMap.get('item');
    // console.log(JSON.parse(this.getValue));
  }

  backtohome() {
    this.router.navigateByUrl('/card');
  }
}
