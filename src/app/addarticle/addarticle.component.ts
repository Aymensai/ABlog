import { Component, OnInit } from '@angular/core';
import { ArticlesService } from 'src/app/articles.service';
import {  UserService } from 'src/app/_services';
import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup, FormControl,Validators } from "@angular/forms";
@Component({
  selector: 'app-addarticle',
  templateUrl: './addarticle.component.html',
  styleUrls: ['./addarticle.component.css']
})
export class AddarticleComponent implements OnInit {

  constructor(
    private allP: ArticlesService,
    private sub: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  users = this.sub.getSub();
  returnUrl: string;
  posts: any = [];

  postGroup = new FormGroup({
    title: new FormControl("", Validators.required),
    imageUrl: new FormControl("", Validators.required),
    content: new FormControl("", Validators.required)
  });

  submit() {
    let date = new Date();
    let token = JSON.parse(localStorage.getItem("token"));
    if (this.postGroup.valid && token) {
      let user = this.users.find(u => u.username == token.username);
      let post = {
        title: this.postGroup.value.title,
        content: this.postGroup.value.content,
        imageUrl: this.postGroup.value.imageUrl,
        publishDate: date,
        id: user.id,
        username: user.username
      };

      this.posts = this.allP.setPost(post);
      this.router.navigate([this.returnUrl]);

      this.postGroup.reset();
    }
  }

  ngOnInit(): void {
    this.returnUrl = "/";
  }
}
