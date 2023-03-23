import { Observable } from 'rxjs';
import { User } from './../models/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { User } from '../models/user';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient,private login:LoginService) { }
  register(user:FormData){
    console.log(user)
    this.http.post("http://localhost:9000/api/v1/register",user).subscribe({
      next:(data:any)=>{
        if(data!="")
        {
          console.log(data)
        }
      }
  })
  }
  vendor(user:User){
    console.log("is working")
    this.http.post("http://localhost:9000/api/v1/vendor",user).subscribe({
      next:(data:any)=>{
        if(data!="")
        {
          console.log(data)
        }
      }
  })
  }
  addRestaurant(restaurant:FormData){
    const headers = new HttpHeaders (
      {
        "authorization" : "Bearer eyJhbGciOiJIUzUxMiJ9.eyJDdXN0b21lciBVc2VySWQiOiJleGFtcGxlMUBleGFtcGxlLmNvbSIsImlhdCI6MTY3OTMwMzI5NX0.uYAoNJXtDrr0bMpt6iduMm6tOj8GtA1O9Fhk6wEnkFK5mN41UrYFkUaSdeZXZ-xAuIwcEE_DRNbpWnweCTCnXA"
        // +this.login.token
      }
    );
    this.http.post("http://localhost:9000/api/v1/user/restaurant/"+"example1@example.com",restaurant
    // this.login.user.email
    ,{headers:headers}
    ).subscribe(
      res=>{console.log("added")}
    )
  }
  addCuisine(cuisine:FormData){
    this.http.post("http://localhost:9000/restaurant/cuisine/example1@example.com/0",cuisine).subscribe(
      res=>{console.log("cuisine method")}
    )
  }

  getRestaurant():Observable<any>{
    return this.http.get("http://localhost:9000/restaurant/getAll")
  }
}
