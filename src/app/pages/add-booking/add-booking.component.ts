import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {tables} from "../../models/tables";
import {AdminBookingService} from "../../services/admin-booking.service";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-add-booking',
  templateUrl: './add-booking.component.html',
  styleUrls: ['./add-booking.component.scss']
})
export class AddBookingComponent implements OnInit {
  horario: any[] = ['11:30 pm a 1:00pm','1:30 pm a 3:00 pm','3:30 pm a 5:30 pm'];
  personas: any[] = ['01','02','03','04','05','06'];

  currentDate: any = new Date();
  form: FormGroup;


  constructor(private titulo:Title,private fb: FormBuilder, private _tableService:AdminBookingService, private router:Router, private _snackbar: MatSnackBar) {
    this.titulo.setTitle('Añadir Reserva manualmente');
    this.form = this.fb.group({
      id: ['',Validators.required, Validators.pattern("[0-9]")],
      nombre: ['',Validators.required],
      evento: ['',Validators.required],
      personas: ['',Validators.required],
      fecha: ['',Validators.required],
      horario: ['',Validators.required],
    })

  }

  ngOnInit(): void {
  }

  agregarReserva(){
    const reserva: tables ={
      id: this.form.value.id,
      nombre: this.form.value.nombre,
      personas: this.form.value.personas,
      eventos: this.form.value.evento,
      fecha: this.form.value.fecha,
      horario: this.form.value.horario,
    }
    this._tableService.agregarTableS(reserva);
    this.router.navigate(['/adminBooking'])

    this._snackbar.open('Reserva agregada!','',{
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: "bottom"
    })
  }
}
