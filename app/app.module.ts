import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {HeaderComponent} from './header/header.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import {AppRoutingModule} from './app.routing.module';
import {NewsService} from './news/news.service';
@NgModule({
  declarations: [
    AppComponent, HeaderComponent, HomeComponent, NewsComponent, AboutusComponent, ContactusComponent
  ],
  imports: [
    BrowserModule,AppRoutingModule
  ],
  providers: [NewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
