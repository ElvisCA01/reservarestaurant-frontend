import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-booking-people-food-snacks',
  templateUrl: './booking-people-food-snacks.component.html',
  styleUrls: ['./booking-people-food-snacks.component.scss']
})
export class BookingPeopleFoodSnacksComponent implements OnInit {
  foodsnackchoosearray: string;
  foodsnack: string[] = ['Causa S/.5', 'Ensalada  S/.5', 'Ensalada rusa  S/.5', 'Chifles  S/.3', 'Cancha  S/.3'];
  price: string[] =['S/. 5', 'S/. 5','S/. 5','S/.3', 'S/.3'];

  constructor(private titulo:Title) {
    titulo.setTitle('Elige tu entrada')
  }

  ngOnInit(): void {
  }
}
