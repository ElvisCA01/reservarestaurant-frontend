import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AdminBookingService} from '../../../../services/admin/admin-booking.service'

@Component({
  selector: 'app-new-reserva',
  templateUrl: './new-reserva.component.html',
  styleUrls: ['./new-reserva.component.scss']
})
export class NewReservaComponent implements OnInit {

  constructor(private service: AdminBookingService,
              private router: Router) { }

  ngOnInit(): void {
  }

  create(reserva: any){
    this.service.agregarReserva(reserva).subscribe((res) => {
      console.log(res);
      this.router.navigate(['/adminBooking']);
    },
    (err) => {
      console.log(err);
    }
   );
  }

}
