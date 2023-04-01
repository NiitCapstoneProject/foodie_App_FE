import { LoginService } from './login.service';
import { Restaurant } from './../models/restaurant';
import { Observable } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cuisine } from '../models/cuisine';
import { Feedback } from '../models/feedback';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  constructor(private http:HttpClient,private login:LoginService) { }
  restaurant:any
  clicked:boolean=false
  getCuisine(id:any):Observable<any>{
   return this.http.get("http://localhost:9000/restaurant/cuisine/"+id)
  }


  searchResAndCusName(name:any){
    this.http.get("http://localhost:9000/restaurant/find/"+name)
  }
  addToCart(cuisine:Cuisine):Observable<any>{
    return this.http.post("http://localhost:9000/api/v1/cart/example1@example.com",cuisine)
   }
   getCartData():Observable<any>{
    return this.http.get("http://localhost:9000/api/v1/cartList/example1@example.com")
   }
   getResturantById(id:any):Observable<any>{
    console.log("I am working "+id )
    return this.http.get("http://localhost:9000/restaurant/getRestaurant/"+id)
   }
   addFeedback(feedback:Feedback,id:number):Observable<any>{
    return this.http.post("http://localhost:9000/restaurant/feedback/"+id,feedback)
  }
  getFeedbacks(restaurantId:number):Observable<any>{
    return this.http.get("http://localhost:9000/restaurant/feedbacks/"+restaurantId)
  }

  getIfLiked(id:any,restaurantId:any){
    return this.http.get("http://localhost:9000/api/v1/getFavorites/example1@example.com/200")
    // +id+"/"+restaurantId)
  }

  addRating(restaurantId:any,rating:any):Observable<any>{
   return this.http.post("http://localhost:9000/restaurant/addRating/"+this.login.user.email+"/"+restaurantId,rating)
  }
  getRating(restaurantId:any):Observable<any>{
    return this.http.get("http://localhost:9000/restaurant/getRating/"+this.login.user.email+"/"+restaurantId)
  }

  deleteCuisineByVendor(restaurantId:any,cuisineId:any):Observable<any>{
    return this.http.delete("http://localhost:9000/restaurant/deleteCuisine/"+restaurantId+"/"+cuisineId)
  }
  updateCuisineByVendor(restaurantId:any,cusisine:Cuisine):Observable<any>{
    return this.http.put("http://localhost:9000/restaurant/updateCuisine/"+restaurantId,cusisine)
  }
}
