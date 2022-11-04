import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingPeopleFoodSoupsComponent } from './booking-people-food-soups.component';

describe('BookingPeopleFoodSoupsComponent', () => {
  let component: BookingPeopleFoodSoupsComponent;
  let fixture: ComponentFixture<BookingPeopleFoodSoupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingPeopleFoodSoupsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookingPeopleFoodSoupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
