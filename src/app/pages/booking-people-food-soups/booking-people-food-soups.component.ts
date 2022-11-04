import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-booking-people-food-soups',
  templateUrl: './booking-people-food-soups.component.html',
  styleUrls: ['./booking-people-food-soups.component.scss']
})
export class BookingPeopleFoodSoupsComponent implements OnInit {
  foodsoupschoosearray: string;
  foodsoups: string[] = ['Sopa teologa S/.20', 'Sopa de pollo S/.15', 'Sopa wantan S/.15', 'No deseo'];
  price: string[] =['S/.20', 'S/. 15','S/. 15'];

  constructor(private titulo:Title) {
    titulo.setTitle('Elige tu sopa')
  }

  ngOnInit(): void {
  }
}
