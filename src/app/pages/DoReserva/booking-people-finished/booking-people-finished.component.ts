import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-booking-people-finished',
  templateUrl: './booking-people-finished.component.html',
  styleUrls: ['./booking-people-finished.component.scss']
})
export class BookingPeopleFinishedComponent implements OnInit {

  constructor(private titulo:Title) {
    titulo.setTitle('Reserva finalizada!')
  }

  ngOnInit(): void {
  }

}
