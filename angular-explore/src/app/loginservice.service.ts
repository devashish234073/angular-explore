import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {
  loginStatus = "not done";
  constructor() { }

  getLoginStatus() { 
    return this.loginStatus;
  }

  setLoginStatus(loginStatus:string) { 
    console.log(loginStatus);
    this.loginStatus = loginStatus;
  }
}
