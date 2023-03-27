import { Component, Input } from '@angular/core';
import { Cuisine } from '../models/cuisine';
import { RestaurantService } from '../services/restaurant.service';

@Component({
  selector: 'app-cuisine-cards',
  templateUrl: './cuisine-cards.component.html',
  styleUrls: ['./cuisine-cards.component.css']
})
export class CuisineCardsComponent {
  constructor(private service:RestaurantService){}

    @Input() cuisine: Cuisine = {}
    addCart(){
      console.log(this.cuisine)
      this.service.addToCart(this.cuisine).subscribe(data=>{console.log(data+"sucess")},err=>{console.log("error")})
        }
}
