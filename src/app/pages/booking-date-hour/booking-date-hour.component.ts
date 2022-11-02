import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-booking-date-hour',
  templateUrl: './booking-date-hour.component.html',
  styleUrls: ['./booking-date-hour.component.scss']
})
export class BookingDateHourComponent implements OnInit {
    hourchoosearray: string;
    hour: string[] = ['11:30 am a 1:00 pm','1:30 pm a 3:00 pm ','3:30 pm a 5:30 pm'];

  constructor(private titulo:Title) {
    titulo.setTitle("Elige la hora!")
  }

  ngOnInit(): void {
  }

}
