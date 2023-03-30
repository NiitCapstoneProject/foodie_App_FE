import { UserService } from './../services/user.service';
import { Component, Input } from '@angular/core';
import { Cuisine } from '../models/cuisine';
import { RestaurantService } from '../services/restaurant.service';

@Component({
  selector: 'app-cuisine-cards',
  templateUrl: './cuisine-cards.component.html',
  styleUrls: ['./cuisine-cards.component.css']
})
export class CuisineCardsComponent {
  constructor(private service:RestaurantService,private userService:UserService){}

    @Input() cuisine: Cuisine = {
      price: 0,
      quantity: 0
    }
    addCart(){
      console.log(this.cuisine)
      this.service.addToCart(this.cuisine).subscribe(data=>{console.log(data+"sucess")
      this.userService.totalAmount=data

    },err=>{console.log("error")})
        }
}
