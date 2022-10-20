import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBookingQueryComponent } from './search-booking-query.component';

describe('SearchBookingQueryComponent', () => {
  let component: SearchBookingQueryComponent;
  let fixture: ComponentFixture<SearchBookingQueryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchBookingQueryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchBookingQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
