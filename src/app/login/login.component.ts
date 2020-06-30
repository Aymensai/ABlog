import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {  AuthenticationService, UserService } from 'src/app/_services';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 

  constructor(
    private router: Router,
    private authS: AuthenticationService,
    private sub: UserService
  ) {}

  loginForm: FormGroup;
  returnUrl: string;
  message: string;
  store = this.sub.getSub();
  onSubmit() {
    let user = this.store.find(u => u.username == this.loginForm.value.username);
    console.log(this.loginForm.value);
    if (this.loginForm.invalid) {
      return;
    } else {
      if (
        this.loginForm.value.username == user.username &&
        this.loginForm.value.password == user.password
      ) {
        console.log("Login successful");
        //this.authService.authLogin(this.model);
        localStorage.setItem("isLoggedIn", "true");
        let token = {
          username: user.username,
          id: user.id
        };
        localStorage.setItem("token", JSON.stringify(token));
        this.router.navigate(["/article"]);
      } else {
        this.message = "Please check your userid and password";
      }
    }
    this.authS.getToken();
    console.log(this.authS.isAuth);
  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl("", Validators.required),
      password: new FormControl("", Validators.required)
    });
    this.returnUrl = "/";
    this.authS.logout();
  }
}
