import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormControl, FormBuilder, FormGroup } from '@angular/forms';
// tslint:disable-next-line: import-spacing
import { LoginsignupService } from '../../services/loginsignup.service';
import swal from 'sweetalert';

 
// import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

user: FormGroup;

  constructor(private router: Router , fb: FormBuilder , private signupService: LoginsignupService) {
    this.user = fb.group({
      username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
       email : new FormControl('', Validators.required),
    firstname: new FormControl('', Validators.required),
 lastname: new FormControl('', Validators.required)
  });
  }
  ngOnInit() {}
navigatetohomefromsignup() {
  // tslint:disable-next-line: no-unused-expression
  // this.user.value;
  this.signupService.addtosignupdata(this.user.value).subscribe((val) => {
    swal('Account Created Successfully!');
    this.router.navigate(['home']);
    console.log(val);
    this.user.reset();
    },
    (error) => {
      console.log(error);
    });
  // this.http.post('https://accedo-video-app-api.herokuapp.com/users', this.user.value).subscribe((data) => {console.log(data); });
  }
showHide() {
    console.log('hi');
  }

}
