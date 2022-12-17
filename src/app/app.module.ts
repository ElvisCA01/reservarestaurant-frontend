import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';


//material
import { MatNativeDateModule } from '@angular/material/core';
import {MatInputModule} from "@angular/material/input";
import {MatCardModule} from "@angular/material/card";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatRadioButton, MatRadioGroup, MatRadioModule} from "@angular/material/radio";
import {MatCheckboxModule} from "@angular/material/checkbox";
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import {MatSortModule} from "@angular/material/sort";
import {MatButtonModule} from "@angular/material/button";
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSnackBar} from "@angular/material/snack-bar";
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDialogModule} from '@angular/material/dialog';


//componentes
import {PrincipalComponent} from './pages/home/principal/principal.component';
import { SearchBookingComponent } from './pages/home/search-booking/search-booking.component';
import { HeaderComponent } from './shell/header/header.component';
import { FooterComponent } from './shell/footer/footer.component';
import { BookingPeopleFinishedComponent } from './pages/DoReserva/booking-people-finished/booking-people-finished.component';
import { SearchBookingQueryComponent } from './pages/home/search-booking-query/search-booking-query.component';
import { BookingPeoplePaymentComponent } from './pages/DoReserva/booking-people-payment/booking-people-payment.component';
import { UsComponent } from './pages/home/us/us.component';
import { LocationComponent } from './pages/home/location/location.component';
import {LoginComponent} from "./pages/userLoginRegister/login/login.component";
import { AdminBookingComponent } from './pages/admin/admin-booking/admin-booking.component';
import { EditBookingComponent } from './pages/admin/edit-booking/edit-booking.component';
import { WatchBookingComponent } from './pages/admin/watch-booking/watch-booking.component';
import { RegisterComponent } from './pages/userLoginRegister/register/register.component';
import {authInterceptorProviders} from "./services/auth.interceptor";
import { DashboardComponent } from './pages/admin/dashboard.component';
import { UserDashboardComponent } from './pages/user/user-dashboard.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { NewPlatoComponent } from './pages/admin/platos/new-plato/new-plato.component';
import { UpdatePlatoComponent } from './pages/admin/platos/update-plato/update-plato.component';
import { ListPlatoComponent } from './pages/admin/platos/list-plato/list-plato.component';
import { FormPlatoComponent } from './pages/admin/platos/shared/form-plato/form-plato.component';
import { CommentsComponent } from './pages/home/comments/listComments/comments.component';
import { AddCommentComponent } from './pages/home/comments/add-comment/add-comment.component';
import {SidebarComponent} from "./shell/sidebar/sidebar.component";
import {NewReservaComponent} from "./pages/DoReserva/reservas/new-reserva/new-reserva.component";
import {FormReservaComponent} from "./pages/DoReserva/reservas/shared/form-reserva/form-reserva.component";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatAutocompleteModule} from "@angular/material/autocomplete";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PrincipalComponent,
    BookingPeopleFinishedComponent,
    SearchBookingComponent,
    SearchBookingQueryComponent,
    BookingPeoplePaymentComponent,
    UsComponent,
    LocationComponent,
    LoginComponent,
    AdminBookingComponent,
    EditBookingComponent,
    WatchBookingComponent,
    RegisterComponent,
    DashboardComponent,
    UserDashboardComponent,
    ProfileComponent,
    NewPlatoComponent,
    UpdatePlatoComponent,
    ListPlatoComponent,
    FormPlatoComponent,
    CommentsComponent,
    AddCommentComponent,
    SidebarComponent,
    NewReservaComponent,
    FormReservaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatRadioModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    HttpClientModule,
    MatTableModule,
    MatIconModule,
    MatSelectModule,
    MatSortModule,
    MatButtonModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
    MatPaginatorModule,
    MatGridListModule,
    MatDialogModule,
    MatToolbarModule,
    MatAutocompleteModule,
  ],
  providers: [
    authInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
