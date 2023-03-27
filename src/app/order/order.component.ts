import { Component, OnInit } from '@angular/core';
import { Order } from '../models/order';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit{

  orders:Order[]=[]
constructor(private userService:UserService){}
  ngOnInit(): void {
    this.userService.getOrders().subscribe(data=>{
      this.orders=data;
    })
  }

}
