import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PrincipalComponent} from "./pages/principal/principal.component";
import {BookingPeopleFinishedComponent} from "./pages/booking-people-finished/booking-people-finished.component";
import {SearchBookingComponent} from "./pages/search-booking/search-booking.component";
import {BookingPeoplePaymentComponent} from "./pages/booking-people-payment/booking-people-payment.component";
import {SearchBookingQueryComponent} from "./pages/search-booking-query/search-booking-query.component";
import {UsComponent} from "./pages/us/us.component";
import {LocationComponent} from "./pages/location/location.component";
import {LoginComponent} from "./pages/login/login.component";
import {AdminBookingComponent} from "./pages/admin-booking/admin-booking.component";
import {EditBookingComponent} from "./pages/edit-booking/edit-booking.component";
import {WatchBookingComponent} from "./pages/watch-booking/watch-booking.component";

import {ReservaComponent} from "./pages/reserva/reserva.component";
import {ComidasComponent} from "./pages/comidas/comidas.component";

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'Principal', component: PrincipalComponent},
  { path: 'bookingPeopleFinished', component: BookingPeopleFinishedComponent},
  { path: 'bookingPeoplePayment', component: BookingPeoplePaymentComponent},
  { path: 'searchBooking', component: SearchBookingComponent},
  { path: 'searchBookingQuery', component: SearchBookingQueryComponent},
  { path: 'Us', component: UsComponent},
  { path: 'Location', component: LocationComponent},
  { path: 'adminBooking', component: AdminBookingComponent},
  { path: 'reserva', component: ReservaComponent},
  { path: 'comidas', component: ComidasComponent},
  { path: 'editBooking/:id', component: EditBookingComponent},
  { path: 'watchBooking/:id', component: WatchBookingComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
