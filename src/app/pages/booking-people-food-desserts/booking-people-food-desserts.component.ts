import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-booking-people-food-desserts',
  templateUrl: './booking-people-food-desserts.component.html',
  styleUrls: ['./booking-people-food-desserts.component.scss']
})
export class BookingPeopleFoodDessertsComponent implements OnInit {
  fooddessertschoosearray: string;
  fooddesserts: string[] = ['Crema volteada S/.6', 'Torta helada S/.7', 'Helado S/.6', 'Gelatina S/.4', 'No deseo'];
  price: string[] =['S/.6', 'S/. 7','S/. 6','S/.4'];

  constructor(private titulo:Title) {
    titulo.setTitle('Elige tu postre')
  }

  ngOnInit(): void {
  }
}
