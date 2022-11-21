import {Component, Inject, OnInit} from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Reserva} from "../../classes/reserva";
import {AdminBookingService} from "../../services/admin-booking.service";
import {Router} from "@angular/router";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.scss']
})
export class ReservaComponent implements OnInit {
  personas: any[] = ['01','02','03','04','05','06'];
  horario: any[] = ['11:30 pm a 1:00pm','1:30 pm a 3:00 pm','3:30 pm a 5:30 pm'];
  currentDate: any=new Date();

  formReserva: FormGroup;


  constructor(private _snackBar: MatSnackBar,private fb:FormBuilder, private _snackbar:MatSnackBar,private api:AdminBookingService,private router:Router) { }

  ngOnInit(): void {
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

  guardaReserva(){
    console.log(this.formReserva.value)
    this.api.registrarReserva(this.formReserva.value)
      .subscribe(response =>{
        this.navigateToFoods();
      })
  }

  navigateToFoods(){
    this.router.navigate(['/comidas']);
  }


}
