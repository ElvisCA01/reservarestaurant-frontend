import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shell/header/header.component';
import { FooterComponent } from './shell/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BookingPeopleComponent } from './pages/booking-people/booking-people.component';
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatRadioButton, MatRadioGroup, MatRadioModule} from "@angular/material/radio";
import {PrincipalComponent} from './pages/principal/principal.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BookingPeopleEventComponent} from './pages/booking-people-event/booking-people-event.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import { BookingPeopleDataComponent } from './pages/booking-people-data/booking-people-data.component';
import {MatInputModule} from "@angular/material/input";
import {MatDatepickerModule} from "@angular/material/datepicker";
import { MatNativeDateModule } from '@angular/material/core';
import { BookingPeopleFinishedComponent } from './pages/booking-people-finished/booking-people-finished.component';
import { BookingPeopleDateComponent } from './pages/booking-people-date/booking-people-date.component';
import {MatCardModule} from "@angular/material/card";


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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
