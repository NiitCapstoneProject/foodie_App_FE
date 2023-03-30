import { RestaurantService } from './../services/restaurant.service';
import { Restaurant } from './../models/restaurant';
import { Router, ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';
import { Cuisine } from '../models/cuisine';

@Component({
  selector: 'app-cuisine-dashboard',
  templateUrl: './cuisine-dashboard.component.html',
  styleUrls: ['./cuisine-dashboard.component.css']
})
export class CuisineDashboardComponent {
  cuisines: Cuisine[] = []
  id:any
  onOpen:boolean= false;
  value:boolean=false;
  constructor(private route:Router,private restuarant :RestaurantService,private activate:ActivatedRoute){}
  ngOnInit(): void {
    this.activate.paramMap.subscribe(
      data => {
       this.id = data.get('id') ?? 0;
        this.restuarant.getCuisine(+this.id).subscribe(
          res => {
            this.cuisines = res
          }
        );
      }
    )
  }
  onChange(event:any){
    console.log(event)
    this.onOpen = event
  }
}
