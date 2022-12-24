import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Pago} from '../shared/pago.model';
import {PagoService} from '../shared/pago.service'
import Swal from "sweetalert2";

@Component({
  selector: 'app-new-pago',
  templateUrl: './new-pago.component.html',
  styleUrls: ['./new-pago.component.scss']
})
export class NewPagoComponent implements OnInit {

  constructor(private service: PagoService, private router:Router) { }

  ngOnInit(): void {
  }

  addPago(pago:Pago){
    this.service.addPago(pago).subscribe(() => {
      Swal.fire(
        'Reserva hecha correctamente',
        'Gracias por preferirnos!',
        'success'
      )
      this.router.navigate(['/adminBooking'])
    }),
    (err:any) => {}
  }

}
