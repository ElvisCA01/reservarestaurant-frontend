import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingPeopleFoodSodasComponent } from './booking-people-food-sodas.component';

describe('BookingPeopleFoodSodasComponent', () => {
  let component: BookingPeopleFoodSodasComponent;
  let fixture: ComponentFixture<BookingPeopleFoodSodasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingPeopleFoodSodasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookingPeopleFoodSodasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
