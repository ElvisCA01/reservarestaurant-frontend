import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingPeopleFoodDishesComponent } from './booking-people-food-dishes.component';

describe('BookingPeopleFoodDishesComponent', () => {
  let component: BookingPeopleFoodDishesComponent;
  let fixture: ComponentFixture<BookingPeopleFoodDishesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingPeopleFoodDishesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookingPeopleFoodDishesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
