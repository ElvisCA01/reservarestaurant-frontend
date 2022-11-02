import { Component, OnInit } from '@angular/core';
import{tables} from "../../models/tables";

@Component({
  selector: 'app-admin-booking',
  templateUrl: './admin-booking.component.html',
  styleUrls: ['./admin-booking.component.scss']
})
export class AdminBookingComponent implements OnInit {
    tablesArray: tables[]=[
      {idT: "000001", Personas: "05", Eventos: "Cumpleaños"},
      {idT: "000002", Personas: "03", Eventos: "Normal"},
      {idT: "000003", Personas: "04", Eventos: "Ninguno"}
    ];


  constructor() { }

  ngOnInit(): void {
  }

}
