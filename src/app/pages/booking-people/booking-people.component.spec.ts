import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingPeopleComponent } from './booking-people.component';

describe('BookingPeopleComponent', () => {
  let component: BookingPeopleComponent;
  let fixture: ComponentFixture<BookingPeopleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingPeopleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookingPeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
