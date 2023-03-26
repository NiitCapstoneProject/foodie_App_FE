import { UserService } from './../services/user.service';
import { Component, EventEmitter, Input, Output } from '@angular/core';
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

// @Input() rating: number = 0;
// @Output() ratingChange: EventEmitter<number> = new EventEmitter<number>();
// @Output() ratingChange: EventEmitter<number> = new EventEmitter<number>();
// gold: boolean = false;

// setRating(rating: number) {
//   console.log(rating)
//   this.rating = rating;
//   this.ratingChange.emit(rating);
// }

// setRating(rating: number) {
//   console.log(rating)
//   this.rating = rating;
//   this.ratingChange.emit(rating);
//   this.gold = rating >= 3;
// }


@Input() maxRating: number = 5;
@Input() rating: number = 0;
@Output() ratingChange: EventEmitter<number> = new EventEmitter<number>();
highlightedRating: number = 0;
setRating(rating: number) {
  console.log(rating)
  this.rating = rating;
  this.ratingChange.emit(rating);
  this.highlightedRating = rating;
}

highlightRating(rating: number) {
  this.highlightedRating = rating;
}

removeHighlight() {
  this.highlightedRating = this.rating;
}

get stars() {
  return Array(this.maxRating).fill(0).map((_, i) => i + 1);
}

}
