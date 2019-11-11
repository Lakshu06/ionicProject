import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
import { LoginsignupService } from 'src/app/services/loginsignup.service';
import swal from 'sweetalert';
import {Observable } from 'rxjs';
import {LoginV } from '../../../app/loginV';
import { LoadingController } from '@ionic/angular';
 // tslint:disable-next-line: import-spacing


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  userlogin: FormGroup;
  loginvalue: LoginV[];
  x;
  isLoading: boolean;
  
   constructor(public loadingController: LoadingController, private router: Router , private fb: FormBuilder , private loginService: LoginsignupService)
    { }

  ngOnInit() { this.loginpostdata(); }
  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Hellooo',
      duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();

    console.log('Loading dismissed!');
  }
  async dismiss() {
    this.isLoading = false;
    return await this.loadingController.dismiss().then(() => console.log('dismissed'));
  }
  navigatetohomefromlogin() {
  this.x= this.loginvalue.filter((data) => (this.userlogin.value.username == data.username && this.userlogin.value.password == data.password
      ))
      if(this.x.length !=0)
      {
        localStorage.setItem('user',JSON.stringify(this.x));
        this.router.navigate(['home']);
        console.log("successfully LogIn");
      }
      else{
        alert("Invalid username or password");
        console.log("LogIn Failed");
      }
      
    }
   
    loginpostdata() {
      this.userlogin = this.fb.group({
        username: new FormControl('', Validators.required),
        password: new FormControl('', Validators.compose([
          Validators.required,
          // Validators.pattern('((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,30})')
          Validators.pattern('[A-Za-z0-9\d@$!%*?&]{8,}$')
        ]))
      });

      this.loginService.findlogindata().subscribe(data => { this.loginvalue = data;
       });
 
  }
}