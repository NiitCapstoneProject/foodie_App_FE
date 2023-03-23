import { Component, Input } from '@angular/core';
import { Cuisine } from '../models/cuisine';

@Component({
  selector: 'app-cuisine-cards',
  templateUrl: './cuisine-cards.component.html',
  styleUrls: ['./cuisine-cards.component.css']
})
export class CuisineCardsComponent {

    @Input() cuisine: Cuisine = {}
  
}
