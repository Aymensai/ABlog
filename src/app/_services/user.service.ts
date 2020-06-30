import { Injectable } from '@angular/core';


import { User } from 'src/app/_models';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor() { }

    public setSub(user: User) {
        let rand = Math.floor(Math.random() * 1000);
        user.id = rand;
        let users = JSON.parse(localStorage.getItem("users")) || [];
        users.push(user);
        localStorage.setItem("users", JSON.stringify(users));
      }
    
      public getSub() {
        if (localStorage.getItem("users")) {
          let store = JSON.parse(localStorage.getItem("users"));
          return store;
        } else {
          console.log("localStorage empty");
        }
      }
    }