import { UserService } from './../services/user.service';
import { Component } from '@angular/core';
import { Restaurant } from '../models/restaurant';

@Component({
  selector: 'app-restaurant-dashboard',
  templateUrl: './restaurant-dashboard.component.html',
  styleUrls: ['./restaurant-dashboard.component.css']
})
export class RestaurantDashboardComponent {
  constructor(private user:UserService){}
  restaurants: Restaurant[] = []

ngOnInit() {
   this.user.getRestaurant().subscribe({next:(data:any)=>{
    if(data!="")
    {
      this.restaurants = data
    }
  }})

}
}
