import { Router } from '@angular/router';
import { Address } from './../models/address';
import { Restaurant } from './../models/restaurant';
import { Observable } from 'rxjs';
import { User } from './../models/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { User } from '../models/user';
import { LoginService } from './login.service';
import { Order } from '../models/order';
import { Cuisine } from '../models/cuisine';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  totalAmount:any

  constructor(private http: HttpClient,private login:LoginService,private router:Router) { }
  register(user:FormData){
    console.log(user)
    this.http.post("http://localhost:9000/api/v1/register",user).subscribe({
      next:(data:any)=>{
        if(data!="")
        {
          this.router.navigateByUrl("/login")
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
    this.http.post("http://localhost:9000/api/v1/user/restaurant/"+this.login.user.email,restaurant
    // this.login.user.email
    ,{headers:headers}
    ).subscribe(
      async res=>{console.log("added");
      let restaurant:Restaurant = res
      this.router.navigateByUrl(restaurant.id+"/addCuisine")
    }
    )
  }
  addCuisine(cuisine:FormData,restaurantId:any){
    this.http.post("http://localhost:9000/restaurant/cuisine/"+this.login.user.email+"/"+restaurantId,cuisine).subscribe(
      res=>{console.log("cuisine method")}
    )
  }

  getRestaurant():Observable<any>{
    return this.http.get("http://localhost:9000/restaurant/getAll")
  }

  placeOrder(order:Order):Observable<any>{
    return this.http.post("http://localhost:9000/api/v1/example1@example.com/order",order)
  }
  getOrders():Observable<any>{
    return this.http.get("http://localhost:9000/api/v1/allOrders/example1@example.com")
  }
  deleteCuisine(cuisine:Cuisine):Observable<any>{
    return this.http.post("http://localhost:9000/api/v1/delete/"+this.login.user.email,cuisine)
  }

  setQuantity(cusine:Cuisine,quantity:number):Observable<any>{
    return this.http.post("http://localhost:9000/api/v1/setQuantity/"+this.login.user.email+"/"+quantity,cusine)
  }

  removeFav(restaurantId:any):Observable<any>{
   return this.http.delete("http://localhost:9000/api/v1/removeFavorite/"+this.login.user.email+"/"+restaurantId)
  }
  addFav(restaurantId:any):Observable<any>{
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
   return this.http.post("http://localhost:9000/api/v1/favorite/"+this.login.user.email,JSON.stringify(restaurantId),{ headers: headers })
  //  +this.login.user.email,restaurantId)
  }


  getAddress():Observable<any>{
    return this.http.get("http://localhost:9000/api/v1/getAddress/"+this.login.user.email)
  }

  addAddress(address:Address):Observable<any>{
    return this.http.post("http://localhost:9000/api/v1/address/"+this.login.user.email,address)
  }

  deleteAddress(id:string):Observable<any>{
    return this.http.delete("http://localhost:9000/api/v1/delete/address/"+this.login.user.email+"/"+id)
  }

  updateAddress(address:Address):Observable<any>{
   return this.http.put("http://localhost:9000/api/v1/editAddress/"+this.login.user.email,address)
  }

  getVendorRestaurant():Observable<any>{
    return this.http.get("http://localhost:9000/api/v1/get/vendor/restaurant/"+this.login.user.email)
  }
  deleteRestaurantByVendor(restaurantId:any):Observable<any>{
    return this.http.delete("http://localhost:9000/api/v1/deleteRestaurant/"+this.login.user.email+"/"+restaurantId)
  }
  updateRestaurantByVendor(restaurant:Restaurant):Observable<any>{
    return this.http.put("http://localhost:9000/api/v1/updateRestaurant",restaurant)
  }

}
