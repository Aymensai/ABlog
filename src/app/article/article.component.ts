import { Component, OnInit } from "@angular/core";

import { ArticlesService } from "src/app/articles.service";
import {  AuthenticationService, UserService } from 'src/app/_services';


@Component({
  selector: "app-article",
  templateUrl: "./article.component.html",
  styleUrls: ["./article.component.css"],
})
export class ArticleComponent implements OnInit {
  constructor(private allP: ArticlesService, private sub: UserService, private authS: AuthenticationService,) {
    this.posts = this.allP.getPosts();
  }

  posts: any[] = [];
  filteredPosts: any[] = [];
  token = JSON.parse(localStorage.getItem("token"));

  ngOnInit(): void {
    this.filteredPosts = this.posts.filter((p) => p.id == this.token.id);
    console.log("aaaaaaaaaaaaaa"+this.authS.isAuth);
  }
  
}
