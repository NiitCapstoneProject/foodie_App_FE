import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../models/login';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  isloggedIn:Boolean = false;
  token:any = ''
  user:User = {}
   constructor(private http:HttpClient,private route:Router) { }

   login(log:Login){
     this.http.post("http://localhost:9000/api/v2/login",log).subscribe({
       next:(data:any)=>{
         console.log(data)
         if(data != ''){
             this.token = data.token
             this.isloggedIn = true
             console.log(this.token)
             console.log(this.isloggedIn)
             const headers = new HttpHeaders (
               {
                 "authorization" : "Bearer "+this.token
               }
             );
             this.http.get("http://localhost:9000/api/v1/user/"+log.email,{headers:headers}).subscribe({
               next:(data:any)=>{
                 if(data != ''){
                     this.user = data
                    //  this.route.navigateByUrl('/song')
                   }
         }
     })
   }},error:(err:any)=>{alert("Wrong Credentials")}
 })}
}
