import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingPeopleFoodSnacksComponent } from './booking-people-food-snacks.component';

describe('BookingPeopleFoodSnacksComponent', () => {
  let component: BookingPeopleFoodSnacksComponent;
  let fixture: ComponentFixture<BookingPeopleFoodSnacksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingPeopleFoodSnacksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookingPeopleFoodSnacksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
