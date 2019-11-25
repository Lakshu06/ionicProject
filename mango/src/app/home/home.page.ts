import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfilePage } from '../pages/profile/profile.page';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  backtohome() {
    this.router.navigate(['profile']);
  }
  navigatebacktosigninpage() {
    localStorage.removeItem('user');
    this.router.navigate(['login']);
  }
}
