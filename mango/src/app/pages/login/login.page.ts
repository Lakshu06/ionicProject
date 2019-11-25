import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
import { LoginsignupService } from 'src/app/services/loginsignup.service';

import { LoadingController } from '@ionic/angular';
// tslint:disable-next-line: import-spacing
import swal from 'sweetalert';
import { SignupPage } from 'src/app/pages/signup/signup.page';

import { AngularFireAuth } from 'angularfire2/auth';


@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
    userlogin: FormGroup;
    x: any;
    isLoading = false;
    loadingCtrl: any;
    navCtrl: any;
    alertCtrl: any;
    setValue: any;

    constructor(
        public loadingController: LoadingController,
        private router: Router,
        private fb: FormBuilder,
        private loginService: LoginsignupService,
        private afAuth: AngularFireAuth) {
        this.userlogin = this.fb.group({
            email: new FormControl('', Validators.required),
            password: new FormControl('', Validators.required)
        });
    }

    ngOnInit() { }


    // async presentLoading() {
    //     this.isLoading = true;
    //     const loading = await this.loadingCtrl.create({
    //         message: 'Wait',
    //     });
    //     await loading.present();
    //     const { role, data } = await loading.onDidDismiss();
    //     console.log('Loading dismissed!');
    // }
    // async dismiss() {
    //     this.isLoading = false;
    //     return await this.loadingCtrl.dismiss().then(() => console.log('dismissed'));
    // }


    navigatetohomefromlogin() {
        // this.presentLoading()
        this.afAuth.auth.signInWithEmailAndPassword(this.userlogin.value.email, this.userlogin.value.password)
            .then((response) => {
                // this.dismiss();
                // console.log(response);
                this.setValue('key', this.userlogin.value.email);
                this.router.navigate(['home']);
                this.userlogin.reset();
            }, (error) => {
                // this.dismiss();
                this.presentAlert(error.message);
            });
    }
    presentAlert(message: any) {
        throw new Error('Method not implemented.');
    }

    // loginpostdata() {

    //     this.loginService.findlogindata().subscribe(data => {
    //         this.loginvalue = data;
    //     });
    // }
}
