import {HomeComponent} from './home/home.component';
import {NewsComponent} from './news/news.component';
import {AboutusComponent} from './aboutus/aboutus.component';
import {ContactusComponent} from './contactus/contactus.component';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
const routes=[
  {path:'home',component:HomeComponent},
  {path:'news/:newscount/:type',component:NewsComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'contactus',component:ContactusComponent}

];
@NgModule({
  imports:[
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule{}
