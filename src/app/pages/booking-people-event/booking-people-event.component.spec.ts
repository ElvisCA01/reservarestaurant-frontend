import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingPeopleEventComponent } from './booking-people-event.component';

describe('BookingPeopleEventComponent', () => {
  let component: BookingPeopleEventComponent;
  let fixture: ComponentFixture<BookingPeopleEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingPeopleEventComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookingPeopleEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
