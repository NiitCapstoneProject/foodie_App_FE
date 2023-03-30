import { Feedback } from './../models/feedback';
import { RestaurantService } from './../services/restaurant.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  constructor(private service:RestaurantService){}
  feedBacks:Feedback[]=[];
  ngOnInit(): void {
    this.service.getFeedbacks(this.restaurantId).subscribe(res=>{console.log("sucess"+res);
    this.feedBacks=res;
    },err=>{"error"})
  }
  @Input() restaurantId:any


}
