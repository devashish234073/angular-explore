import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { LoginserviceService } from '../loginservice.service';
import { CustomValidators } from './custom.validators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService:LoginserviceService) { }

  ngOnInit(): void {
  }

  username = new FormControl('', [Validators.required, CustomValidators.cannotContainSpace]);
  password = new FormControl('', [Validators.required]);

  login() {
    if(this.username.value!="devadeva" || this.password.value!="devadeva") {
      this.loginService.setLoginStatus("failed");
    } else {
      this.loginService.setLoginStatus("success");
    }
  }

  getLoginStatus() {
    return this.loginService.getLoginStatus();
  }

}
