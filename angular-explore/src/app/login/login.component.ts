import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { CustomValidators } from './custom.validators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  username = new FormControl('', [Validators.required, CustomValidators.cannotContainSpace]);
  password = new FormControl('', [Validators.required]);

  loginStatus = "not done";

  login() {
    if(this.username.value!="devadeva" || this.password.value!="devadeva") {
      this.loginStatus = "failed";
    } else {
      this.loginStatus = "success";
    }
  }

}
