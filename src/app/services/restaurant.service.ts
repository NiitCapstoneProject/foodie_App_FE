import { Observable } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Restaurant } from '../models/restaurant';
import { Injectable } from '@angular/core';
import { Cuisine } from '../models/cuisine';
import { Feedback } from '../models/feedback';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  constructor(private http:HttpClient) { }
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
    return this.http.get("http://localhost:9000/api/v1/getFavorites/"+id+"/"+restaurantId)
  }


  
}
