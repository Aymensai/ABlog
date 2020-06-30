import { Injectable } from '@angular/core';

import{ UserService } from 'src/app/_services/user.service'

import { User } from 'src/app/_models';


@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    user: User;
    token;
    isAuth = true;
  
    constructor(public sub: UserService ) {}
  
    getToken() {
      this.token = JSON.parse(localStorage.getItem("token"));
      if (this.token) {
        this.isAuth = !this.isAuth;
      }
    }
  
    logout(): void {
      localStorage.setItem("isLoggedIn", "false");
      localStorage.removeItem("token");
    }
  }
  