import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PrincipalComponent} from "./pages/home/principal/principal.component";
import {BookingPeopleFinishedComponent} from "./pages/DoReserva/booking-people-finished/booking-people-finished.component";
import {SearchBookingComponent} from "./pages/home/search-booking/search-booking.component";
import {BookingPeoplePaymentComponent} from "./pages/DoReserva/booking-people-payment/booking-people-payment.component";
import {SearchBookingQueryComponent} from "./pages/home/search-booking-query/search-booking-query.component";
import {UsComponent} from "./pages/home/us/us.component";
import {LocationComponent} from "./pages/home/location/location.component";
import {LoginComponent} from "./pages/userLoginRegister/login/login.component";
import {AdminBookingComponent} from "./pages/admin/admin-booking/admin-booking.component";
import {EditBookingComponent} from "./pages/admin/edit-booking/edit-booking.component";
import {WatchBookingComponent} from "./pages/admin/watch-booking/watch-booking.component";

import {ReservaComponent} from "./pages/DoReserva/reserva/reserva.component";
import {ComidasComponent} from "./pages/DoReserva/comidas/comidas.component";
import {RegisterComponent} from "./pages/userLoginRegister/register/register.component";

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
  {path: 'register', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
