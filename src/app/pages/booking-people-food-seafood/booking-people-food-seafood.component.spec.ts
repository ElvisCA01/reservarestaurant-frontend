import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingPeopleFoodSeafoodComponent } from './booking-people-food-seafood.component';

describe('BookingPeopleFoodSeafoodComponent', () => {
  let component: BookingPeopleFoodSeafoodComponent;
  let fixture: ComponentFixture<BookingPeopleFoodSeafoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingPeopleFoodSeafoodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookingPeopleFoodSeafoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
