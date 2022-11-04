import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-booking-people-food-dishes',
  templateUrl: './booking-people-food-dishes.component.html',
  styleUrls: ['./booking-people-food-dishes.component.scss']
})
export class BookingPeopleFoodDishesComponent implements OnInit {
  fooddisheschoosearray: string;
  fooddishes: string[] = ['Lomo saltado S/.30', 'Cabrito S/.25', 'Chaufa S/.25', 'Pollo a la plancha S/.25', 'Pato S/.30'];
  price: string[] =['S/.30', 'S/. 25','S/. 25','S/.25','S/.30'];

  constructor(private titulo:Title) {
    titulo.setTitle('Elige tu plato')
  }

  ngOnInit(): void {
  }
}
