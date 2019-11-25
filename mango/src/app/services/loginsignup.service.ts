import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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


  addtosignupdata(data): Observable<any[]> {
    const signupdata = JSON.stringify(data);
    console.log(signupdata);
    return this.http.post<any>(this.signupurl, signupdata);
  }
  //login

  findlogindata(): Observable<any[]> {
    return this.http.get<any[]>(this.loginurl);

  }

  loginpostdata(data) {
    console.log(data);
    return this.http.post<any>(this.loginurl, data);
  }
}
