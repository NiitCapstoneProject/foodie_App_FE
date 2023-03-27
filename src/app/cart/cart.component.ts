import { Component } from '@angular/core';
import { Cuisine } from '../models/cuisine';
import { Order } from '../models/order';
import { RestaurantService } from '../services/restaurant.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  order1:Order={}
  constructor(private service:RestaurantService,private userService:UserService){}
  private _total: number | undefined;
  public get total(): number | undefined {
    return this._total = this.userService.totalAmount;
  }

  cuisines:Cuisine[]=[];
  length:number=this.cuisines.length;
  ngOnInit(): void {
// this.total=this.userService.totalAmount;
this.service.getCartData().subscribe(res=>{console.log(res)
this.cuisines=res;
this.cuisines.length
console.log(this.cuisines.length)
})
  }

  delete(result:Cuisine){
    // console.log(result.id)
    this.userService.deleteCuisine(result).subscribe(data=>{
      this.ngOnInit()
    })
  }

  order(){

    this.order1.cuisines=this.cuisines;
    this.userService.placeOrder(this.order1).subscribe(data=>{
      alert("Your bill amount: "+data.totalBillAmount)
      console.log(data);
    })
  }
}
