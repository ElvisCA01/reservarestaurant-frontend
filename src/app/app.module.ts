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
import { PrincipalComponent } from './pages/principal/principal.component';
import {FormsModule} from "@angular/forms";
import { BookingPeopleEventComponent } from './pages/booking-people-event/booking-people-event.component';
import {MatFormFieldModule} from "@angular/material/form-field";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BookingPeopleComponent,
    PrincipalComponent,
    BookingPeopleEventComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatRadioModule,
    FormsModule,
    MatFormFieldModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
