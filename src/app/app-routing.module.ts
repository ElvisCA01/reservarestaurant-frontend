import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BookingPeopleComponent} from "./pages/booking-people/booking-people.component";
import {PrincipalComponent} from "./pages/principal/principal.component";
import {BookingPeopleEventComponent} from "./pages/booking-people-event/booking-people-event.component";
import {BookingPeopleDataComponent} from "./pages/booking-people-data/booking-people-data.component";
import {BookingPeopleFinishedComponent} from "./pages/booking-people-finished/booking-people-finished.component";
import {BookingPeopleDateComponent} from "./pages/booking-people-date/booking-people-date.component";

const routes: Routes = [
  { path: '', component: PrincipalComponent},
  { path: 'reservar', component: BookingPeopleComponent},
  { path: 'bookingPeopleEvent', component: BookingPeopleEventComponent},
  { path: 'bookingPeopleData', component: BookingPeopleDataComponent},
  { path: 'bookingPeopleFinished', component: BookingPeopleFinishedComponent},
  { path: 'bookingPeopleDate', component: BookingPeopleDateComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
