import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {   AbstractControl,  ValidationErrors,FormControl,FormGroup, Validators } from '@angular/forms';
import { UserService} from 'src/app/_services';
import { User } from 'src/app/_models'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    store: any[] = [];
    registerForm: FormGroup;
    users: User[];
    returnUrl;
    constructor(private router: Router, private sub: UserService) {}
  
    submit() {
      if (this.registerForm.valid) {
        const user = {
          username: this.registerForm.value.username,
          lastname: this.registerForm.value.lastname,
          email: this.registerForm.value.email,
          password: this.registerForm.value.password
        };
        this.sub.setSub(user);
        this.registerForm.reset();
        this.router.navigate([this.returnUrl]);
      }
    }
  
    ngOnInit(): void {
      if (this.sub.getSub()) {
        this.store = this.sub.getSub();
      }
      console.log(this.store);
  
      this.registerForm = new FormGroup({
        username: new FormControl("", [Validators.required, this.uniqueName()]),
        lastname: new FormControl("", Validators.required),
        email: new FormControl("", [
          Validators.required,
          Validators.email,
          this.uniqueEmail()
        ]),
        password: new FormControl("", [
          Validators.required,
          Validators.pattern(
            "(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&]).{8,}"
          )
        ])
      });
      this.returnUrl = "/login";
    }
  
    uniqueName() {
      return (control: AbstractControl): { [key: string]: any } | null => {
        let user = this.store.length
          ? this.store.find(n => n.username == control.value)
          : null;
  
        if (user?.username) {
          return { unique: true };
        }
      };
    }
  
    uniqueEmail() {
      return (control: AbstractControl): ValidationErrors | null => {
        let user = this.store
          ? this.store.find(n => n.email == control.value)
          : null;
  
        if (user?.email) {
          return { unique: true };
        }
      };
    }
  
    validationMessages = {
      username: {
        required: "Username is required.",
        uniqueName: "Username is already taken."
      },
    
      email: {
        required: "Email is required.",
        email: "Enter a valid Email",
        uniqueEmail: "Email is already taken"
      }
    };
  
    formErrors = {
      username: "",
      email: ""
    };
  
    logValidationErrors(group: FormGroup = this.registerForm): void {
      Object.keys(group.controls).forEach((key: string) => {
        const abstractControl = group.get(key);
        if (abstractControl instanceof FormGroup) {
          this.logValidationErrors(abstractControl);
        } else {
          this.formErrors[key] = "";
          if (
            abstractControl &&
            !abstractControl.valid &&
            (abstractControl.touched || abstractControl.dirty)
          ) {
            const messages = this.validationMessages[key];
            for (const errorKey in abstractControl.errors) {
              if (errorKey) {
                this.formErrors[key] += messages[errorKey] + " ";
              }
            }
          }
        }
      });
    }
    }