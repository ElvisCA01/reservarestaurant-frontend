import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingPeopleFinishedComponent } from './booking-people-finished.component';

describe('BookingPeopleFinishedComponent', () => {
  let component: BookingPeopleFinishedComponent;
  let fixture: ComponentFixture<BookingPeopleFinishedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingPeopleFinishedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookingPeopleFinishedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
