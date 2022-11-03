import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AdminBookingService} from "../../services/admin-booking.service";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-edit-booking',
  templateUrl: './edit-booking.component.html',
  styleUrls: ['./edit-booking.component.scss']
})
export class EditBookingComponent implements OnInit {
  horario: any[] = ['11:30 pm a 1:00pm','1:30 pm a 3:00 pm','3:30 pm a 5:30 pm'];
  personas: any[] = ['01','02','03','04','05','06'];

  currentDate: any = new Date();
  form: FormGroup;

  constructor(private fb: FormBuilder, private _tableService:AdminBookingService, private router:Router, private _snackbar: MatSnackBar) {
    this.form = this.fb.group({
      id: ['',Validators.required, Validators.pattern("[0-9]")],
      nombre: ['',Validators.required],
      evento: ['',Validators.required],
      personas: ['',Validators.required],
      fecha: ['',Validators.required],
      horario: ['',Validators.required],
    })
  }

  editarReserva(){
    this._snackbar.open('Reserva editada!','',{
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: "bottom"
    })
    this.router.navigate(['/adminBooking']);
  }

  ngOnInit(): void {
  }

}
