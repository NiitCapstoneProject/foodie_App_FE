import { UserService } from './../services/user.service';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Restaurant } from '../models/restaurant';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-restaurant-dashboard',
  templateUrl: './restaurant-dashboard.component.html',
  styleUrls: ['./restaurant-dashboard.component.css']
})
export class RestaurantDashboardComponent {

  rating3: number;
  constructor(private user:UserService,private fb: FormBuilder){
    this.rating3 = 0;
  }
  restaurants: Restaurant[] = []

ngOnInit() {
   this.user.getRestaurant().subscribe({next:(data:any)=>{
    console.log("resturant"+data)
    if(data!="")
    {
      this.restaurants = data
    }
  }})

}

// change (){
//   console.log(this.rating3)
// }

}


