import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-booking-people-food',
  templateUrl: './booking-people-food.component.html',
  styleUrls: ['./booking-people-food.component.scss']
})
export class BookingPeopleFoodComponent implements OnInit {
  peoplechoosearray: string;
  people: string[] = ['Comida criolla', 'Parrillas', 'Mariscos', 'Frituras', 'Combinados', 'Otro(especifica)'];

  constructor(private titulo:Title) {
    titulo.setTitle('Elige tu comida')
  }

  ngOnInit(): void {
  }

}
