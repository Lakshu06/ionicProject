import { Component , OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  ngOnInit(): void {}
  constructor( private router: Router) {}

  navigatetopage() {
    // tslint:disable-next-line: no-unused-expression
    this.router.navigate(['showpage']);
  }

}
