import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-booking-people-food',
  templateUrl: './booking-people-food.component.html',
  styleUrls: ['./booking-people-food.component.scss']
})
export class BookingPeopleFoodComponent implements OnInit {
  foodchoosearray: string;
  food: string[] = ['Comida criolla  S/.30', 'Parrillas  S/.25', 'Mariscos  S/.25', 'Frituras  S/.10', 'Combinados  S/.15'];
  prices: string[] =['S/. 30', 'S/. 25','S/. 25','S/.10', 'S/.15'];

  constructor(private titulo:Title) {
    titulo.setTitle('Elige tu comida')
  }

  ngOnInit(): void {
  }

}
