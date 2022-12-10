import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AdminBookingService} from "../../../services/admin/admin-booking.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Reserva} from "../../../classes/reserva/reserva.model";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-watch-booking',
  templateUrl: './watch-booking.component.html',
  styleUrls: ['./watch-booking.component.scss']
})
export class WatchBookingComponent implements OnInit {
  horario: any[] = ['11:30 pm a 1:00pm','1:30 pm a 3:00 pm','3:30 pm a 5:30 pm'];
  personas: any[] = ['01','02','03','04','05','06'];

  currentDate: any = new Date();
  formReserva: FormGroup;
  id:number;

  constructor(private route:ActivatedRoute,private _snackBar: MatSnackBar,private fb:FormBuilder, private _snackbar:MatSnackBar,private api:AdminBookingService,private router:Router) {
    this.formReserva = this.fb.group({
      id: this.fb.control(''),
      personas:this.fb.control(''),
      nombre:this.fb.control(''),
      papellido:this.fb.control(''),
      sapellido:this.fb.control(''),
      horario:this.fb.control(''),
      evento: this.fb.control(''),
      fecha: this.fb.control(''),
    })

  }
  get idP(){
    return this.formReserva.get('id')?.value;
  }
  get nombreP(){
    return this.formReserva.get('nombre')?.value;
  }
  get personaP(){
    return this.formReserva.get('personas')?.value;
  }
  get papellidoP(){
    return this.formReserva.get('papellido')?.value;
  }
  get sapellidoP(){
    return this.formReserva.get('sapellido')?.value;
  }
  get horarioP(){
    return this.formReserva.get('horario')?.value;
  }
  get eventoP(){
    return this.formReserva.get('evento')?.value;
  }
  get fechaP(){
    return this.formReserva.get('fecha')?.value;
  }


  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.api.listarReservas()
      .subscribe(data =>{
        this.formReserva.patchValue(data);
        console.log(this.id);
      })
  }

}
