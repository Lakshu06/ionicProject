import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { SignupPage } from '../pages/signup/signup.page';
import {LoginPage } from '../pages/login/login.page';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginsignupService {


  constructor(private http: HttpClient) { }
  signupurl = 'https://accedo-video-app-api.herokuapp.com/signup';
  loginurl = 'https://accedo-video-app-api.herokuapp.com/users';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  // getData(): Observable<todoDataformat[]> {
  //   return this.http.get<todoDataformat[]>(this.signupurl );

  // }

  addtosignupdata(data) {
    const signupdata = JSON.stringify(data);
    console.log(signupdata);
    return this.http.post(this.signupurl, signupdata, this.httpOptions);
  }
  findlogindata(data) {
    const logindata = JSON.stringify(data);
    console.log(logindata);
    return this.http.get(this.loginurl, logindata);
  }
}
