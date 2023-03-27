import { Component } from '@angular/core';
import { Cuisine } from '../models/cuisine';
import { RestaurantService } from '../services/restaurant.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  constructor(private service:RestaurantService){}
  cuisines:Cuisine[]=[];
  length:number=this.cuisines.length;
  ngOnInit(): void {
this.service.getCartData().subscribe(res=>{console.log(res)
this.cuisines=res;
this.cuisines.length
console.log(this.cuisines.length)
})
  }
}
