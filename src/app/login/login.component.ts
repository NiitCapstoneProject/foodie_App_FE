import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(
    private fb: FormBuilder,
  // private snackBar: MatSnackBar
    private login:LoginService,
    private route:Router
  ) {}


  loginForm:any = new FormGroup({
    email:new FormControl(''),
    password: new FormControl('')
  })


  onSubmit() {
    console.log("clicked")
    let user : User = {}
    user.email =  this.loginForm.value.email
    user.password = this.loginForm.value.password
    // console.log(user)
    this.login.login(user)
    console.log(this.login.user)
    // // this.route.navigateByUrl('/song')
  }
  get email(){
    return this.loginForm.get('email')
    }
    get password(){
      return this.loginForm.get('password')
      }
    getErrorMessage(){
      return "This Field Cannot Be Empty"
    }
}
