import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AdminBookingService} from "../../services/admin-booking.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-edit-booking',
  templateUrl: './edit-booking.component.html',
  styleUrls: ['./edit-booking.component.scss']
})
export class EditBookingComponent implements OnInit {
  personas: any[] = ['01','02','03','04','05','06'];
  horario: any[] = ['11:30 pm a 1:00 pm','1:30 pm a 3:00 pm','3:30 pm a 5:30 pm'];

  currentDate: any = new Date();
  formReserva: FormGroup;
  id:number;


  constructor(private route:ActivatedRoute,private _snackBar: MatSnackBar,private fb:FormBuilder, private _snackbar:MatSnackBar,private api:AdminBookingService,private router:Router) {
    this.formReserva = this.fb.group({
      personas:this.fb.control('',Validators.required),
      nombre:this.fb.control('',Validators.required),
      papellido:this.fb.control('',Validators.required),
      sapellido:this.fb.control('',Validators.required),
      horario:this.fb.control('',Validators.required),
      evento: this.fb.control('',Validators.required),
      fecha: this.fb.control('',Validators.required),
    })
  }


  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.api.obtenerReservaPorId(this.id)
      .subscribe(data =>{
        this.formReserva.patchValue(data);
      })
  }

  onSubmit(){
    this.api.actualizarReserva(this.id,this.formReserva.value)
      .subscribe(data=>{
        this.goToAdminBooking();
      })
  }

  goToAdminBooking(){
    this.router.navigate(['/adminBooking']);
  }

}
