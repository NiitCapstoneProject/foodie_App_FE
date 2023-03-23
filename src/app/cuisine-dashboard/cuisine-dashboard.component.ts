import { RestaurantService } from './../services/restaurant.service';
import { Restaurant } from './../models/restaurant';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { Cuisine } from '../models/cuisine';

@Component({
  selector: 'app-cuisine-dashboard',
  templateUrl: './cuisine-dashboard.component.html',
  styleUrls: ['./cuisine-dashboard.component.css']
})
export class CuisineDashboardComponent {
  cuisines: Cuisine[] = []
  constructor(private route:Router,private restuarant :RestaurantService){}
  ngOnInit(){
    this.restuarant.getCuisine().subscribe({next:(data:any)=>{
      if(data!="")
      {
        this.cuisines = data
      }
    }})
  }
}
