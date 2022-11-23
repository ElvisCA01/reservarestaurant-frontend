import { Component, OnInit } from '@angular/core';
import {Form, FormControl} from '@angular/forms';
import {MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import {MatDatepicker} from '@angular/material/datepicker';
import {default as _rollupMoment, Moment} from 'moment';
import {Title} from "@angular/platform-browser";
import {FormGroup,FormBuilder,Validators} from "@angular/forms";
import * as _moment from 'moment';


const moment = _rollupMoment || _moment;


export const MY_FORMATS = {
  parse: {
    dateInput: 'MM/YYYY',
  },
  display: {
    dateInput: 'MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

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

  form:FormGroup;

  setMonthAndYear(normalizedMonthAndYear: Moment, datepicker: MatDatepicker<Moment>) {
    const ctrlValue = this.date.value!;
    ctrlValue.month(normalizedMonthAndYear.month());
    ctrlValue.year(normalizedMonthAndYear.year());
    this.date.setValue(ctrlValue);
    datepicker.close();
  }

  constructor(private titulo:Title,private fb:FormBuilder) {
      titulo.setTitle('Realiza tu compra!');
      this.form=this.fb.group({
        nombreTarjeta: ['',Validators.required],
        numeroTarjeta: ['',Validators.required],
        codigoVerificacion: ['',Validators.required],
        fechaCaducidad: ['',Validators.required],
      })
  }

  ngOnInit(): void {
  }

}
