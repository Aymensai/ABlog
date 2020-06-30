import { Injectable } from '@angular/core';
import { CanActivate,Router} from '@angular/router';
import {  AuthenticationService } from 'src/app/_services';
@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate {
  constructor(private authS: AuthenticationService, private router: Router) {}

  canActivate() {
    if (this.authS.isAuth) {
      return true;
    } else {
      this.router.navigate(["/login"]);
    }
  }
}