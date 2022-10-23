import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-booking-people-event',
  templateUrl: './booking-people-event.component.html',
  styleUrls: ['./booking-people-event.component.scss']
})
export class BookingPeopleEventComponent implements OnInit {
  peoplechoosearray: string;
  people: string[] = ['Cumpleaños', 'Ninguna', 'Otro(especifica)'];

  constructor(private titulo:Title) {
    titulo.setTitle('Elige tu evento')
  }

  ngOnInit(): void {
  }

}
