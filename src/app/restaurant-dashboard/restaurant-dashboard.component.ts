import { Component } from '@angular/core';
import { Restaurant } from '../models/restaurant';

@Component({
  selector: 'app-restaurant-dashboard',
  templateUrl: './restaurant-dashboard.component.html',
  styleUrls: ['./restaurant-dashboard.component.css']
})
export class RestaurantDashboardComponent {
  restaurants: Restaurant[] = [
    {
      id: 1,
      name: 'Restaurant A',
      city: 'New York',
      rating: 4.5,
      image: 1,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      id: 2,
      name: 'Restaurant B',
      city: 'San Francisco',
      rating: 4.2,
      image: 21,
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
  ];

ngOnInit() {
  // this.restaurants = this.restaurants;
}


}
