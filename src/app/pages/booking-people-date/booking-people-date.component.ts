import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";


@Component({
  selector: 'app-booking-people-date',
  templateUrl: './booking-people-date.component.html',
  styleUrls: ['./booking-people-date.component.scss']
})
export class BookingPeopleDateComponent implements OnInit {
  selected: Date | null;
  currentDate: any = new Date();

  constructor(private titulo:Title) {
      titulo.setTitle('Elige tu dia')
  }

  ngOnInit(): void {
  }

}
