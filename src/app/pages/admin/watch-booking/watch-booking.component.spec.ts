import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchBookingComponent } from './watch-booking.component';

describe('WatchBookingComponent', () => {
  let component: WatchBookingComponent;
  let fixture: ComponentFixture<WatchBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WatchBookingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WatchBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
