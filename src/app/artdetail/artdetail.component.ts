import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { ArticlesService } from 'src/app/articles.service';
@Component({
  selector: 'app-artdetail',
  templateUrl: './artdetail.component.html',
  styleUrls: ['./artdetail.component.css']
})
export class ArtdetailComponent implements OnInit {

  constructor(private allP: ArticlesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  id;
  edit = false;
  token;
  posts;
  post;
  postGroup: FormGroup;
  delete() {
    this.allP.delete(this.id);
    this.router.navigate(["/home"]);
  }
  toEdit() {
    this.edit = !this.edit;
  }
  subEdit() {
    this.posts = this.allP.getPosts();
    this.post = this.postGroup.value;
    this.posts[this.id] = this.post;
    this.edit = !this.edit;
    localStorage.setItem("posts", JSON.stringify(this.posts));
  }
  ngOnInit(): void {
    this.token = JSON.parse(localStorage.getItem("token"));
    this.id = this.route.snapshot.params["id"];

    this.post = this.allP.getPost(this.id);

    this.postGroup = new FormGroup({
      id: new FormControl(this.post.id),
      aid: new FormControl(this.post.aid),
      title: new FormControl(this.post.title),
      imageUrl: new FormControl(this.post.imageUrl),
      content: new FormControl(this.post.content),
      username: new FormControl(this.post.username),
      publishDate: new FormControl(this.post.publishDate)
    });
  }
}
