import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingDateHourComponent } from './booking-date-hour.component';

describe('BookingDateHourComponent', () => {
  let component: BookingDateHourComponent;
  let fixture: ComponentFixture<BookingDateHourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingDateHourComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookingDateHourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
