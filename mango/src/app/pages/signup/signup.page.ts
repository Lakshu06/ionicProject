import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormControl, FormBuilder, FormGroup } from '@angular/forms';
// tslint:disable-next-line: import-spacing
import { LoginsignupService } from '../../services/loginsignup.service';
import swal from 'sweetalert';
import { EmailValidator } from './email';
import { AngularFireAuth } from 'angularfire2/auth';
import { HomePage } from 'src/app/home/home.page';
import { AlertController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';


// import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  user: FormGroup;
  userDoc: any;
  userProfileCollection: any;


  constructor(
    private router: Router,
    fb: FormBuilder,
    private signupService: LoginsignupService,
    private afAuth: AngularFireAuth,
    private firestore: AngularFirestore,
    private loading: LoadingController,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController
  ) {
    this.user = fb.group({

      username: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, , EmailValidator.isValid])],
      password: ['', Validators.compose([Validators.minLength(6), Validators.required])],
      firstName: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      lastName: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])]
    });


  }
  ngOnInit() { }

  navigatetohomefromsignup() {
    // tslint:disable-next-line: triple-equals
    // tslint:disable-next-line: align
    if (this.user.value.password === this.user.value.retype) {
      this.afAuth.auth.createUserWithEmailAndPassword(this.user.value.email, this.user.value.password)
        .then(() => {
          let userId = this.afAuth.auth.currentUser.uid;
          this.userDoc = this.firestore.doc<any>('users/' + userId);
          this.userDoc.set({
            username: this.user.value.username,
            email: this.user.value.email,
            password: this.user.value.password,
            firstName: this.user.value.firstName,
            lastName: this.user.value.lastName,
          });
          this.router.navigate(['HomePage']);
        }, (error) => {
          alert('error');
        });

    } else {
      alert('vslidation');
    }
  }
}
