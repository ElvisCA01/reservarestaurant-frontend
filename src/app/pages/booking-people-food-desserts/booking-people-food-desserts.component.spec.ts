import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingPeopleFoodDessertsComponent } from './booking-people-food-desserts.component';

describe('BookingPeopleFoodDessertsComponent', () => {
  let component: BookingPeopleFoodDessertsComponent;
  let fixture: ComponentFixture<BookingPeopleFoodDessertsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingPeopleFoodDessertsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookingPeopleFoodDessertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
