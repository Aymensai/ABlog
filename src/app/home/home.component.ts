import { Component, OnInit } from '@angular/core';

import{ArticlesService} from 'src/app/articles.service'

import { UserService} from 'src/app/_services';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor(private allP: ArticlesService, private sub: UserService) {
    this.posts = this.allP.getPosts();
    this.users = this.sub.getSub();
  }

  posts: any[] = [];
  users: any[] = [];


  ngOnInit() {
     
  }

  
}