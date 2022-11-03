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
import { BookingPeopleFoodComponent } from './pages/booking-people-food/booking-people-food.component';
import {LoginComponent} from "./pages/login/login.component";
import {BookingDateHourComponent} from "./pages/booking-date-hour/booking-date-hour.component";
import {AdminBookingComponent} from "./pages/admin-booking/admin-booking.component";
import {EditBookingComponent} from "./pages/edit-booking/edit-booking.component";
import {AddBookingComponent} from "./pages/add-booking/add-booking.component";
import {WatchBookingComponent} from "./pages/watch-booking/watch-booking.component";

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'Principal', component: PrincipalComponent},
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
  { path: 'bookingPeopleFood', component: BookingPeopleFoodComponent},
  { path: 'bookingDateHour', component: BookingDateHourComponent},
  { path: 'adminBooking', component: AdminBookingComponent},
  { path: 'editBooking', component: EditBookingComponent},
  { path: 'addBooking', component: AddBookingComponent},
  { path: 'watchBooking', component: WatchBookingComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
