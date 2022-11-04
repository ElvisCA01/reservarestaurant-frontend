import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-booking-people-food-sodas',
  templateUrl: './booking-people-food-sodas.component.html',
  styleUrls: ['./booking-people-food-sodas.component.scss']
})
export class BookingPeopleFoodSodasComponent implements OnInit {
  foodsodaschoosearray: string;
  foodsodas: string[] = ['Inka Cola 1.5lt S/.8', 'Coca Cola 1.5lt S/.8', 'Fanta 1.5lt S/.8', 'Pepsi 1.5lt S/.8', 'No deseo'];
  price: string[] =['S/.8', 'S/. 8','S/. 8','S/.8'];

  constructor(private titulo:Title) {
    titulo.setTitle('Elige tu gaseosa')
  }

  ngOnInit(): void {
  }
}
