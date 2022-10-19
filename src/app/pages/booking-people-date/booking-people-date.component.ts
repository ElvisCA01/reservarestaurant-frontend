import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-booking-people-date',
  templateUrl: './booking-people-date.component.html',
  styleUrls: ['./booking-people-date.component.scss']
})
export class BookingPeopleDateComponent implements OnInit {
  selected: Date | null;


  constructor() { }

  ngOnInit(): void {
  }

}
