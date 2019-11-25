import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-slides',
  templateUrl: './slides.page.html',
  styleUrls: ['./slides.page.scss'],
})
export class SlidesPage implements OnInit {
  images = ['1.jpeg', '2.jpeg', '3.jpg', '4.jpg', '5.jpg', '6.jpg'];
  constructor(
    public router: Router) { }

  ngOnInit() {
  }
  backtohome() {
    console.log('done');
    this.router.navigateByUrl('/home');
  }

}
