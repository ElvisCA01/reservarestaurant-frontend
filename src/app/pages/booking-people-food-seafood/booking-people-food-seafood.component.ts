import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-booking-people-food-seafood',
  templateUrl: './booking-people-food-seafood.component.html',
  styleUrls: ['./booking-people-food-seafood.component.scss']
})
export class BookingPeopleFoodSeafoodComponent implements OnInit {
  foodseafoodchoosearray: string;
  foodseafood: string[] = ['Ceviche S/.25', 'Tortilla de camarones S/.25', 'Arroz con mariscos S/.25', 'Pescado frito S/.20', 'No deseo'];
  price: string[] =['S/.25', 'S/. 25','S/. 25','S/.20'];

  constructor(private titulo:Title) {
    titulo.setTitle('Elige tu plato de mariscos')
  }

  ngOnInit(): void {
  }
}
