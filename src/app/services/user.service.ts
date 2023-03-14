import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient,private login:LoginService) { }
  register(user:User){
    this.http.post("http://localhost:9000/api/v1/add",user).subscribe({
      next:(data:any)=>{
        if(data!="")
        {
          console.log(data)
        }
      }
  })
  }
}