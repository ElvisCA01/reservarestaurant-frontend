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

import {ListPlatoComponent} from "../app/pages/admin/platos/list-plato/list-plato.component"
import {NewPlatoComponent} from "../app/pages/admin/platos/new-plato/new-plato.component"
import {UpdatePlatoComponent} from "../app/pages/admin/platos/update-plato/update-plato.component"

import { NewReservaComponent } from "../app/pages/DoReserva/reservas/new-reserva/new-reserva.component";
import {ReservaComponent} from "./pages/DoReserva/reserva/reserva.component";
import {ComidasComponent} from "./pages/DoReserva/comidas/comidas.component";
import {RegisterComponent} from "./pages/userLoginRegister/register/register.component";
import {DashboardComponent} from "./pages/admin/dashboard.component";
import {UserDashboardComponent} from "./pages/user/user-dashboard.component";
import {AdminGuard} from "./services/adminGuard/admin.guard";
import {NormalGuard} from "./services/normalGuard/normal.guard";
import {IsLoggedInGuard} from "./services/isLoggedIn/is-logged-in.guard";
import {ProfileComponent} from "./pages/profile/profile.component";
import {CommentsComponent} from "./pages/home/comments/listComments/comments.component";
import {AddCommentComponent} from "./pages/home/comments/add-comment/add-comment.component";

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full'
  },
  {
    path: '',
    component: PrincipalComponent,
    pathMatch: 'full',
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
    pathMatch: 'full',
    canActivate: [AdminGuard]
  },
  {
    path: 'reserva1',
    component: ReservaComponent,
    pathMatch: 'full'
  },
  {
    path: 'reserva',
    component: NewReservaComponent,
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
    pathMatch: 'full',
    canActivate: [AdminGuard]

  },
  {
    path: 'watchBooking/:id',
    component: WatchBookingComponent,
    pathMatch: 'full',
    canActivate: [AdminGuard]

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
    canActivate: [AdminGuard],
    children:[

    ]
  },
  {
    path: 'profile',
    component: ProfileComponent,
    pathMatch: 'full',
    canActivate: [IsLoggedInGuard]
  },
  {
    path: 'plato',
    component: ListPlatoComponent,
    pathMatch: 'full',
    canActivate: [IsLoggedInGuard]
  },
  {
    path: 'plato/new',
    component: NewPlatoComponent,
    pathMatch: 'full',
    canActivate: [IsLoggedInGuard]
  },
  {
    path: 'plato/:id/edit',
    component: UpdatePlatoComponent,
    pathMatch: 'full',
    canActivate: [IsLoggedInGuard]
  },
  {
    path: 'user-dashboard',
    component: UserDashboardComponent,
    pathMatch: 'full',
    canActivate: [NormalGuard]
  },
  {
    path: 'comentarios',
    component: CommentsComponent,
    canActivate: [IsLoggedInGuard],
  },
  {
    path: 'comentarios/addComment',
    component: AddCommentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
