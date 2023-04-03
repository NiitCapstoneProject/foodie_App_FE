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
  loginID:any
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
          localStorage.setItem("vendor","true")
          this.router.navigateByUrl("/vendorRestaurantDashboard")
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
    this.http.post("http://localhost:9000/api/v1/user/restaurant/"+localStorage.getItem('email'),restaurant
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
    this.http.post("http://localhost:9000/restaurant/cuisine/"+localStorage.getItem('email')+"/"+restaurantId,cuisine).subscribe(
      res=>{console.log("cuisine method")}
    )
  }

  getRestaurant():Observable<any>{
    return this.http.get("http://localhost:9000/restaurant/getAll")
  }

  placeOrder(order:Order):Observable<any>{
    return this.http.post("http://localhost:9000/api/v1/"+localStorage.getItem('email')+"/order",order)
  }
  getOrders():Observable<any>{
    return this.http.get("http://localhost:9000/api/v1/allOrders/"+localStorage.getItem('email'))
  }
  deleteCuisine(cuisine:Cuisine):Observable<any>{
    return this.http.post("http://localhost:9000/api/v1/delete/"+localStorage.getItem('email'),cuisine)
  }

  setQuantity(cusine:Cuisine,quantity:number):Observable<any>{
    return this.http.post("http://localhost:9000/api/v1/setQuantity/"+localStorage.getItem('email')+"/"+quantity,cusine)
  }

  removeFav(restaurantId:any):Observable<any>{
   return this.http.delete("http://localhost:9000/api/v1/removeFavorite/"+localStorage.getItem('email')+"/"+restaurantId)
  }
  addFav(restaurantId:any):Observable<any>{
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
   return this.http.post("http://localhost:9000/api/v1/favorite/"+localStorage.getItem('email'),JSON.stringify(restaurantId),{ headers: headers })
  //  +this.login.user.email,restaurantId)
  }


  getAddress():Observable<any>{
    return this.http.get("http://localhost:9000/api/v1/getAddress/"+localStorage.getItem('email'))
  }

  addAddress(address:Address):Observable<any>{
    return this.http.post("http://localhost:9000/api/v1/address/"+localStorage.getItem('email'),address)
  }

  deleteAddress(id:string):Observable<any>{
    return this.http.delete("http://localhost:9000/api/v1/delete/address/"+localStorage.getItem('email')+"/"+id)
  }

  updateAddress(address:Address):Observable<any>{
   return this.http.put("http://localhost:9000/api/v1/editAddress/"+localStorage.getItem('email'),address)
  }

  getVendorRestaurant():Observable<any>{
    return this.http.get("http://localhost:9000/api/v1/get/vendor/restaurant/"+localStorage.getItem('email'))
  }
  deleteRestaurantByVendor(restaurantId:any):Observable<any>{
    return this.http.delete("http://localhost:9000/api/v1/deleteRestaurant/"+localStorage.getItem('email')+"/"+restaurantId)
  }
  updateRestaurantByVendor(restaurant:Restaurant):Observable<any>{
    return this.http.put("http://localhost:9000/api/v1/updateRestaurant",restaurant)
  }
  getUser():Observable<any>{
    const headers = new HttpHeaders (
      {
       "authorization" : "Bearer "+ localStorage.getItem("token")
      }
    );
    return this.http.get("http://localhost:9000/api/v1/user/"+localStorage.getItem('email'),{headers:headers})
  }
  updateUser(user:User):Observable<any>{
    const headers = new HttpHeaders (
      {
       "authorization" : "Bearer "+ localStorage.getItem("token")
      }
    );
    return this.http.put("http://localhost:9000/api/v1/user/update",user,{headers:headers})
  }


  updateImage(id:any,image:any){
    const formdata = new FormData();
    formdata.append('image', image);
    return this.http.put("http://localhost:9000/api/v1/image/update/image/"+id,formdata)
  }

  getCartItems(){
    return this.http.get("http://localhost:9000/api/v1/cartItems/"+localStorage.getItem("email"))
  }



  getLikedRestaurant():Observable<any>{
    return this.http.get("http://localhost:9000/api/v1/getLiked/restaurant/"+localStorage.getItem("email"))
  }
}
