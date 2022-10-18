import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingPeopleDataComponent } from './booking-people-data.component';

describe('BookingPeopleDataComponent', () => {
  let component: BookingPeopleDataComponent;
  let fixture: ComponentFixture<BookingPeopleDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingPeopleDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookingPeopleDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
