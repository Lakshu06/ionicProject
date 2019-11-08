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
    password: new FormControl('', Validators.compose([
        Validators.required,
        // Validators.pattern('((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,30})')
        Validators.pattern('[A-Za-z0-9\d@$!%*?&]{8,}$')
      ])),
       email : new FormControl('', Validators.compose([
      Validators.required,
      Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
    ])),
    firstname: new FormControl('', Validators.required),
 lastname: new FormControl('', Validators.required)
  });
  }
  ngOnInit() {}
navigatetohome() {
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
