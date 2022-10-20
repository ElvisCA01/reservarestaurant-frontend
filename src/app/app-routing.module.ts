import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BookingPeopleComponent} from "./pages/booking-people/booking-people.component";
import {PrincipalComponent} from "./pages/principal/principal.component";
import {BookingPeopleEventComponent} from "./pages/booking-people-event/booking-people-event.component";
import {BookingPeopleDataComponent} from "./pages/booking-people-data/booking-people-data.component";
import {BookingPeopleFinishedComponent} from "./pages/booking-people-finished/booking-people-finished.component";
import {BookingPeopleDateComponent} from "./pages/booking-people-date/booking-people-date.component";
import {SearchBookingComponent} from "./pages/search-booking/search-booking.component";
import {BookingPeoplePaymentComponent} from "./pages/booking-people-payment/booking-people-payment.component";
import {SearchBookingQueryComponent} from "./pages/search-booking-query/search-booking-query.component";
import {UsComponent} from "./pages/us/us.component";
import {LocationComponent} from "./pages/location/location.component";

const routes: Routes = [
  { path: '', component: PrincipalComponent},
  { path: 'bookingPeople', component: BookingPeopleComponent},
  { path: 'bookingPeopleEvent', component: BookingPeopleEventComponent},
  { path: 'bookingPeopleData', component: BookingPeopleDataComponent},
  { path: 'bookingPeopleFinished', component: BookingPeopleFinishedComponent},
  { path: 'bookingPeopleDate', component: BookingPeopleDateComponent},
  { path: 'bookingPeoplePayment', component: BookingPeoplePaymentComponent},
  { path: 'searchBooking', component: SearchBookingComponent},
  { path: 'searchBookingQuery', component: SearchBookingQueryComponent},
  { path: 'Us', component: UsComponent},
  { path: 'Location', component: LocationComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
