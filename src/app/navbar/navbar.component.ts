import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import {  AuthenticationService, UserService } from 'src/app/_services';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private router: Router,
    public authS:  AuthenticationService,
    private sub: UserService
  ) {
    this.conUser = JSON.parse(localStorage.getItem("token"));
  }
  logout() {
    console.log("logout");
    this.authS.logout();
    this.router.navigate(["/login"]);
  }
  navbarOpen = false;
  username: string;
  conUser: any;
  users = this.sub.getSub();

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  ngOnInit(): void {}
}
