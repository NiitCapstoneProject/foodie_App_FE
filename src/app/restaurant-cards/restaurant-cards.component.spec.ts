import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantCardsComponent } from './restaurant-cards.component';

describe('RestaurantCardsComponent', () => {
  let component: RestaurantCardsComponent;
  let fixture: ComponentFixture<RestaurantCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurantCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestaurantCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
