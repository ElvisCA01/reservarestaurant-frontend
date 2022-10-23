import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import {MatDatepicker} from '@angular/material/datepicker';
import {MY_FORMATS} from "../booking-people-data/booking-people-data.component";
import moment, {Moment} from "moment/moment";
import {Title} from "@angular/platform-browser";


@Component({
  selector: 'app-booking-people-payment',
  templateUrl: './booking-people-payment.component.html',
  styleUrls: ['./booking-people-payment.component.scss'],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },
    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ],
})
export class BookingPeoplePaymentComponent implements OnInit {
  date = new FormControl(moment());
  currentDate: any = new Date();


  setMonthAndYear(normalizedMonthAndYear: Moment, datepicker: MatDatepicker<Moment>) {
    const ctrlValue = this.date.value!;
    ctrlValue.month(normalizedMonthAndYear.month());
    ctrlValue.year(normalizedMonthAndYear.year());
    this.date.setValue(ctrlValue);
    datepicker.close();
  }
  constructor(private titulo:Title) {
      titulo.setTitle('Realiza tu compra!')
  }

  ngOnInit(): void {
  }

}
