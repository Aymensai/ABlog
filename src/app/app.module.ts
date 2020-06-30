import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { AddarticleComponent } from './addarticle/addarticle.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MatToolbarModule } from "@angular/material/toolbar";
import { FormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { NavbarComponent } from './navbar/navbar.component';
import { ArticleComponent } from './article/article.component';
import { ArtdetailComponent } from './artdetail/artdetail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddarticleComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    ArticleComponent,
    ArtdetailComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    ReactiveFormsModule,
    MatToolbarModule,
    FormsModule,
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
