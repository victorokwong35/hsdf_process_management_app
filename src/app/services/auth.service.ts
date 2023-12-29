import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from './token.service';
import { UrlsService } from './urls.service';
import { Userdata } from '../model/userdata';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // private signUpUrl: string = "https://x8ki-letl-twmt.n7.xano.io/api:X--NSYAJ/auth/signup"
  // private loginUrl: string = "https://x8ki-letl-twmt.n7.xano.io/api:X--NSYAJ/auth/login"
  // private userDataUrl: string = "https://x8ki-letl-twmt.n7.xano.io/api:X--NSYAJ/auth/me"

  constructor(
    private http: HttpClient,
    private fireauth: AngularFireAuth,
    private router: Router, private token: TokenService,
    private urls: UrlsService,
    private jwtHelper: JwtHelperService,
    private tokenService: TokenService

  ) { }

  decodeToken(): any {
    const token = this.tokenService.getToken()

    if (token) {
      return this.jwtHelper.decodeToken(token)
    }

    return null
  }






  // login
  // logIn(email: string, password: string) {
  //   this.fireauth.signInWithEmailAndPassword(email, password).then(() => {
  //     localStorage.setItem('token', 'true');
  //     alert("Success");
  //     this.router.navigate(["dashboard"])
  //   }, err => {
  //     alert("something went wrong")
  //     this.router.navigate(["/login"])
  //   })
  // }

  //Signup firebase
  // signUp(email: string, password: string) {
  //   this.fireauth.createUserWithEmailAndPassword(email, password).then(() => {
  //     alert("Registration Successful");
  //     this.router.navigate(["login"])
  //   }, err => {
  //     alert(err.message)
  //     this.router.navigate(["signup"])
  //   })
  // }

  //Signup xano API

  signUp(name: string, email: string, password: string): Observable<any> {
    const userSignUpData = { name, email, password }
    return this.http.post(`${this.urls.getSignUpUrl()}`, userSignUpData)
  }

  logIn(email: string, password: string): Observable<any> {
    const userLoginData = { email, password }
    return this.http.post(`${this.urls.getLoginUrl()}`, userLoginData)
  }
  //

  getUserData(data: Userdata) {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token.getToken()}`
    });

    return this.http.get(this.urls.getUserDataUrl(), { headers })

  }


  // logOut() {
  //   this.fireauth.signOut().then(() => {
  //     localStorage.removeItem('token');
  //     this.router.navigate(["/login"])
  //   })
  // }
}
