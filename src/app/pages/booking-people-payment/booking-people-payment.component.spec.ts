import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingPeoplePaymentComponent } from './booking-people-payment.component';

describe('BookingPeoplePaymentComponent', () => {
  let component: BookingPeoplePaymentComponent;
  let fixture: ComponentFixture<BookingPeoplePaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingPeoplePaymentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookingPeoplePaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
