import {Component} from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector:'header',
  templateUrl:'header.component.html'

})
export class HeaderComponent{
about:string;
active:string;
constructor(private router:Router){
  this.about = 'aboutus';
  this.active = 'active';
}
loadHome(){
  this.router.navigate(['/home']);
}
}
