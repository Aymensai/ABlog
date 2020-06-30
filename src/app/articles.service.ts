import { Injectable } from '@angular/core';
import { Post } from "src/app/article";
@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  posts;
  setPost(post: Post) {
    let rand = Math.floor(Math.random() * 1000);
    post.aid = rand;
    this.posts = JSON.parse(localStorage.getItem("posts")) || [];
    this.posts.push(post);
    localStorage.setItem("posts", JSON.stringify(this.posts));
  }

  getPosts() {
    if (localStorage.getItem("posts")) {
      return JSON.parse(localStorage.getItem("posts"));
    } else {
      console.log("localStorage empty");
    }
  }

  getPost(id) {
    this.posts = JSON.parse(localStorage.getItem("posts"));
    return this.posts[id];
  }
  delete(id) {
    this.posts = this.getPosts();
    this.posts.splice(id, 1);
    localStorage.setItem("posts", JSON.stringify(this.posts));
  }
}