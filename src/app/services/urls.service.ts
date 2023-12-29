import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlsService {

  constructor() { }

  private signUpUrl: string = "https://x8ki-letl-twmt.n7.xano.io/api:X--NSYAJ/auth/signup"
  private loginUrl: string = "https://x8ki-letl-twmt.n7.xano.io/api:X--NSYAJ/auth/login"
  private userDataUrl: string = "https://x8ki-letl-twmt.n7.xano.io/api:X--NSYAJ/auth/me"

  getSignUpUrl(): string {
    return this.signUpUrl
  }
  getLoginUrl(): string {
    return this.loginUrl
  }
  getUserDataUrl(): string {
    return this.userDataUrl
  }
}
