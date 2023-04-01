import { Router } from '@angular/router';
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
  constructor(private service:RestaurantService,private userService:UserService,private router:Router){}
  total = 0


  cuisines:Cuisine[]=[];
  length:number=this.cuisines.length;
  ngOnInit(): void {
    this.service.getCartData().subscribe(data=>{this.cuisines=data;
      for(let cuisine of data){
        let price=cuisine.price
        let quantity=cuisine.quantity
        this.total+=price*quantity;
        console.log(this.total)
      }
    })
  }

delete(result:Cuisine){
console.log(result.id)
this.userService.deleteCuisine(result).subscribe(data=>{
this.total=0;
this.ngOnInit();
console.log(data);
})
}
setQuantity(cuisine:Cuisine){
  console.log(cuisine)
  console.log(cuisine.quantity)
  this.userService.setQuantity(cuisine,cuisine.quantity).subscribe(
    
  )
}


decrementQuantity(cuisine:Cuisine) {
  if (cuisine.quantity > 0) {
    cuisine.quantity--;
    this.setQuantity(cuisine)
  }
}

incrementQuantity(cuisine:Cuisine) {
  cuisine.quantity++;
  this.setQuantity(cuisine)
}

  order(){

    this.order1.cuisines=this.cuisines;
    this.userService.placeOrder(this.order1).subscribe(data=>{
      alert("Your bill amount: "+data.totalBillAmount)
      console.log(data);
    })
    this.router.navigateByUrl("addressdash")
  }

}
