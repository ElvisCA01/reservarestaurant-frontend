import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";


@Component({
  selector: 'app-booking-people',
  templateUrl: './booking-people.component.html',
  styleUrls: ['./booking-people.component.scss']
})

export class BookingPeopleComponent implements OnInit {

  peoplechoosearray: string;
  people: string[] = ['1 persona', '2 personas', '3 personas', '4 personas','5 personas','6 personas'];

  constructor(private titulo: Title) {
    titulo.setTitle('Reservar Mesa')
  }

  ngOnInit(): void {
  }

}
