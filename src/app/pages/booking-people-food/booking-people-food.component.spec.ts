import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingPeopleFoodComponent } from './booking-people-food.component';

describe('BookingPeopleFoodComponent', () => {
  let component: BookingPeopleFoodComponent;
  let fixture: ComponentFixture<BookingPeopleFoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingPeopleFoodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookingPeopleFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
