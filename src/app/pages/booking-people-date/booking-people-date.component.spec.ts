import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingPeopleDateComponent } from './booking-people-date.component';

describe('BookingPeopleDateComponent', () => {
  let component: BookingPeopleDateComponent;
  let fixture: ComponentFixture<BookingPeopleDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingPeopleDateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookingPeopleDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
