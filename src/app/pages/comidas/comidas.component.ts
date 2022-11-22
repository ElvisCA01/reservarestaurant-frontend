import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";
import {AdminBookingService} from "../../services/admin/admin-booking.service";
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-comidas',
  templateUrl: './comidas.component.html',
  styleUrls: ['./comidas.component.scss']
})
export class ComidasComponent implements OnInit {

  Entradas: string;
  entradas: string[] = ['Causa','Ensalada','Ensalada Rusa','Chifles','Cancha'];

  Jugos: string;
  jugos: string[] = ['Chicha morada','Maracuya','Limonada','Jugo de naranja','No deseo'];

  PlatosCarta: string;
  platosCarta: string[]=['Lomo saltado','Cabrito','Chaufa','Pollo a la plancha','Pato'];

  Postres: string;
  postres: string[]=['Crema volteada','Torta Helada','Helado','No deseo'];

  Gaseosas: string;
  gaseosas: string[]=['Inka kola 1.5lt','Coca Cola 1.5lt','Pepsi 1.5lt','No deseo'];

  Sopas: string;
  sopas: string[]=['Sopa teologa','Sopa de pollo','Sopa Wantan','No deseo'];

  Mariscos: string;
  mariscos: string[] = ['Ceviche','Tortilla de camarones','Arroz con mariscos','No deseo'];

  comidasForm=this.fb.group({
    id:this.fb.control({value:'',disabled:true}),
    entradasForm:this.fb.control('',Validators.required),
    jugosForm:this.fb.control('',Validators.required),
    platosCartaForm:this.fb.control('',Validators.required),
    postresForm:this.fb.control('',Validators.required),
    gaseosasForm:this.fb.control('',Validators.required),
    sopasForm:this.fb.control('',Validators.required),
    mariscosForm:this.fb.control('',Validators.required),
  })
  constructor(private _snackBar: MatSnackBar,private fb:FormBuilder,private dialog: MatDialog, private _snackbar:MatSnackBar) { }

  ngOnInit(): void {
  }

}
