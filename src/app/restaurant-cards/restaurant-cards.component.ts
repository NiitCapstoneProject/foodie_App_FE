import { Component, Input } from '@angular/core';
import { Restaurant } from '../models/restaurant';

@Component({
  selector: 'app-restaurant-cards',
  templateUrl: './restaurant-cards.component.html',
  styleUrls: ['./restaurant-cards.component.css']
})
export class RestaurantCardsComponent {
  @Input() restaurant: Restaurant = {}
  ngOnInit() {
    console.log(this.restaurant.image)
  }
}
