import { Observable } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Restaurant } from '../models/restaurant';
import { Injectable } from '@angular/core';
import { Cuisine } from '../models/cuisine';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  constructor(private http:HttpClient) { }
  restaurant:any
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
}
