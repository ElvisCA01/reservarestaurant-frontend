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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BookingPeopleComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatRadioModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
