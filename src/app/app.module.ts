import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { BookingPeopleDataComponent } from './pages/booking-people-data/booking-people-data.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchFilterPipe } from './pages/search-booking/filter-search.pipe';
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
import {PrincipalComponent} from './pages/principal/principal.component';
import { SearchBookingComponent } from './pages/search-booking/search-booking.component';
import { BookingPeopleComponent } from './pages/booking-people/booking-people.component';
import { HeaderComponent } from './shell/header/header.component';
import { FooterComponent } from './shell/footer/footer.component';
import {BookingPeopleEventComponent} from './pages/booking-people-event/booking-people-event.component';
import { BookingPeopleFinishedComponent } from './pages/booking-people-finished/booking-people-finished.component';
import { BookingPeopleDateComponent } from './pages/booking-people-date/booking-people-date.component';
import { SearchBookingQueryComponent } from './pages/search-booking-query/search-booking-query.component';
import { BookingPeoplePaymentComponent } from './pages/booking-people-payment/booking-people-payment.component';
import { UsComponent } from './pages/us/us.component';
import { LocationComponent } from './pages/location/location.component';
import {LoginComponent} from "./pages/login/login.component";
import { BookingDateHourComponent } from './pages/booking-date-hour/booking-date-hour.component';
import { AdminBookingComponent } from './pages/admin-booking/admin-booking.component';
import { EditBookingComponent } from './pages/edit-booking/edit-booking.component';
import { WatchBookingComponent } from './pages/watch-booking/watch-booking.component';
import { BookingPeopleFoodSnacksComponent } from './pages/booking-people-food-snacks/booking-people-food-snacks.component';
import { BookingPeopleFoodJuicesComponent } from './pages/booking-people-food-juices/booking-people-food-juices.component';
import { BookingPeopleFoodDishesComponent } from './pages/booking-people-food-dishes/booking-people-food-dishes.component';
import { BookingPeopleFoodDessertsComponent } from './pages/booking-people-food-desserts/booking-people-food-desserts.component';
import { BookingPeopleFoodSodasComponent } from './pages/booking-people-food-sodas/booking-people-food-sodas.component';
import { BookingPeopleFoodSoupsComponent } from './pages/booking-people-food-soups/booking-people-food-soups.component';
import { BookingPeopleFoodSeafoodComponent } from './pages/booking-people-food-seafood/booking-people-food-seafood.component';
import { DialogComponent } from './UI/dialog/dialog.component';
import { Dialog2Component } from './UI/dialog2/dialog2.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BookingPeopleComponent,
    PrincipalComponent,
    BookingPeopleEventComponent,
    BookingPeopleDataComponent,
    BookingPeopleFinishedComponent,
    BookingPeopleDateComponent,
    SearchBookingComponent,
    SearchFilterPipe,
    SearchBookingQueryComponent,
    BookingPeoplePaymentComponent,
    UsComponent,
    LocationComponent,
    LoginComponent,
    BookingDateHourComponent,
    AdminBookingComponent,
    EditBookingComponent,
    WatchBookingComponent,
    BookingPeopleFoodSnacksComponent,
    BookingPeopleFoodJuicesComponent,
    BookingPeopleFoodDishesComponent,
    BookingPeopleFoodDessertsComponent,
    BookingPeopleFoodSodasComponent,
    BookingPeopleFoodSoupsComponent,
    BookingPeopleFoodSeafoodComponent,
    DialogComponent,
    Dialog2Component,
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
