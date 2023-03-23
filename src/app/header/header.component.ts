import { Router, RouterModule } from '@angular/router';
import { Login } from './../models/login';
import { LoginService } from './../services/login.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private login:LoginService,private route:Router){}
  get loggedIn() { return this.login.isloggedIn}
  get user() {return this.login.user}


  goToLogin(){
    console.log("clicked")
    this.route.navigateByUrl("/login")
  }
}
