import { Observable } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Restaurant } from '../models/restaurant';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  constructor(private http:HttpClient) { }
  restaurant:any
  getCuisine():Observable<any>{
   return this.http.get("http://localhost:9000/restaurant/cuisine/"+this.restaurant)
  }
}
