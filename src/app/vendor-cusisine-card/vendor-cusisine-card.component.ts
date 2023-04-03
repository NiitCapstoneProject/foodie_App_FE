import { Route, Router } from '@angular/router';
import { Cuisine } from './../models/cuisine';
import { Restaurant } from './../models/restaurant';
import { RestaurantService } from './../services/restaurant.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-vendor-cusisine-card',
  templateUrl: './vendor-cusisine-card.component.html',
  styleUrls: ['./vendor-cusisine-card.component.css']
})
export class VendorCusisineCardComponent implements OnInit{
  constructor(private serviceRest:RestaurantService,private router :Router){}
  @Input() restaurantId :any
  ngOnInit(): void {

  }
@Input() cuisine:Cuisine={
  price: 0,
  quantity: 0
}


  delCuisine(id:any){
    this.serviceRest.deleteCuisineByVendor(this.restaurantId, id).subscribe

  }

  editCuisine(cuisineId:any){
  this.router.navigateByUrl("/VendorcuisineForm/"+this.restaurantId+"/cuisineId/"+cuisineId)
  }
}
