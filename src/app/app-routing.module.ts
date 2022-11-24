import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PrincipalComponent} from "./pages/home/principal/principal.component";
import {
  BookingPeopleFinishedComponent
} from "./pages/DoReserva/booking-people-finished/booking-people-finished.component";
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
import {DashboardComponent} from "./pages/admin/dashboard.component";
import {UserDashboardComponent} from "./pages/user/user-dashboard.component";
import {AdminGuard} from "./services/adminGuard/admin.guard";
import {NormalGuard} from "./services/normalGuard/normal.guard";

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full'
  },
  {
    path: 'Principal',
    component: PrincipalComponent,
    pathMatch: 'full'
  },
  {
    path: 'bookingPeopleFinished',
    component: BookingPeopleFinishedComponent,
    pathMatch: 'full'
  },
  {
    path: 'bookingPeoplePayment',
    component: BookingPeoplePaymentComponent,
    pathMatch: 'full'
  },
  {
    path: 'searchBooking',
    component: SearchBookingComponent,
    pathMatch: 'full'
  },
  {
    path: 'searchBookingQuery',
    component: SearchBookingQueryComponent,
    pathMatch: 'full'
  },
  {
    path: 'Us',
    component: UsComponent,
    pathMatch: 'full'
  },
  {
    path: 'Location',
    component: LocationComponent,
    pathMatch: 'full'
  },
  {
    path: 'adminBooking',
    component: AdminBookingComponent,
    pathMatch: 'full'
  },
  {
    path: 'reserva',
    component: ReservaComponent,
    pathMatch: 'full'
  },
  {
    path: 'comidas',
    component: ComidasComponent,
    pathMatch: 'full'
  },
  {
    path: 'editBooking/:id',
    component: EditBookingComponent,
    pathMatch: 'full'
  },
  {
    path: 'watchBooking/:id',
    component: WatchBookingComponent,
    pathMatch: 'full'
  },
  {
    path: 'register',
    component: RegisterComponent,
    pathMatch: 'full'
  },
  {
    path: 'admin',
    component: DashboardComponent,
    pathMatch: 'full',
    canActivate: [AdminGuard]
  },
  {
    path: 'user-dashboard',
    component: UserDashboardComponent,
    pathMatch: 'full',
    canActivate: [NormalGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
