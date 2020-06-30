import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddarticleComponent } from './addarticle/addarticle.component';
import {ArticleComponent} from 'src/app/article/article.component'
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ArtdetailComponent } from 'src/app/artdetail/artdetail.component';
import { GuardGuard } from "src/app/guard.guard";
import { ArticlesService } from 'src/app/articles.service';
const routes: Routes = [ 
{ path: "home", component: HomeComponent },
{ path: "login", component: LoginComponent },
{ path: "register", component: RegisterComponent },
{ path: "article", canActivate: [GuardGuard], component: ArticleComponent },
{ path: "addarticle", canActivate: [GuardGuard], component: AddarticleComponent },
{ path: "artdetail", component: ArtdetailComponent }, 
{ path: "post/:id", component: ArtdetailComponent },
{ path: "", redirectTo: "home", pathMatch: "full" }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [ArticlesService],
  exports: [RouterModule]
})
export class AppRoutingModule { }
