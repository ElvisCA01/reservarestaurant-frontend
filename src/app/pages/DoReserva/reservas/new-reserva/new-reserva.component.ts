import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AdminBookingService} from '../../../../services/admin/admin-booking.service'
import {Title} from "@angular/platform-browser";
import Swal from "sweetalert2";

@Component({
  selector: 'app-new-reserva',
  templateUrl: './new-reserva.component.html',
  styleUrls: ['./new-reserva.component.scss']
})
export class NewReservaComponent implements OnInit {

  constructor(private service: AdminBookingService,
              private router: Router, private titulo: Title) {
    titulo.setTitle("Nueva Reserva")
  }

  ngOnInit(): void {
  }

  create(reserva: any){

    this.service.agregarReserva(reserva).subscribe((res) => {
        Swal.fire(
          'Reserva hecha correctamente',
          'Gracias por preferirnos!',
          'success'
        )
        this.router.navigate(['/adminBooking']);
    },
    (err) => {
      console.log(err);
    }
   );
  }

}
