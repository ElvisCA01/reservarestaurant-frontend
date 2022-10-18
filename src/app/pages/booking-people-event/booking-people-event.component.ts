import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booking-people-event',
  templateUrl: './booking-people-event.component.html',
  styleUrls: ['./booking-people-event.component.scss']
})
export class BookingPeopleEventComponent implements OnInit {
  peoplechoosearray: string;
  people: string[] = ['Cumpleaños', 'Ninguna', 'Otra(especifica)'];

  constructor() { }

  ngOnInit(): void {
  }

}
