import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-search-booking-query',
  templateUrl: './search-booking-query.component.html',
  styleUrls: ['./search-booking-query.component.scss']
})
export class SearchBookingQueryComponent implements OnInit {

  constructor(private titulo:Title) {
    titulo.setTitle('Este es tu reserva!')
  }

  ngOnInit(): void {
  }

}
