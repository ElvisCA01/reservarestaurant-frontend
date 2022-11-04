import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingPeopleFoodJuicesComponent } from './booking-people-food-juices.component';

describe('BookingPeopleFoodJuicesComponent', () => {
  let component: BookingPeopleFoodJuicesComponent;
  let fixture: ComponentFixture<BookingPeopleFoodJuicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingPeopleFoodJuicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookingPeopleFoodJuicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
