import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-booking-people-food-juices',
  templateUrl: './booking-people-food-juices.component.html',
  styleUrls: ['./booking-people-food-juices.component.scss']
})
export class BookingPeopleFoodJuicesComponent implements OnInit {
  foodjuiceschoosearray: string;
  foodjuice: string[] = ['Chicha morada 2lt S/.7', 'Maracuyá 2lt S/.7', 'Limonada 2lt S/.7', 'Jugo de naranja 2lt  S/.7', 'No deseo'];
  price: string[] =['S/. 7', 'S/. 7','S/. 7','S/.7'];

  constructor(private titulo:Title) {
    titulo.setTitle('Elige tu jugo')
  }

  ngOnInit(): void {
  }
}
