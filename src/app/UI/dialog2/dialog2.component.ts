import {Component, Inject, OnInit} from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";
import {FormBuilder, Validators} from "@angular/forms";
import {AdminBookingService} from "../../services/admin-booking.service";
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-dialog2',
  templateUrl: './dialog2.component.html',
  styleUrls: ['./dialog2.component.scss']
})
export class Dialog2Component implements OnInit {

  editFood: any;

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

  constructor(private _snackBar: MatSnackBar,private fb:FormBuilder, private api:AdminBookingService,private dialog: MatDialog,
              @Inject(MAT_DIALOG_DATA) public data:any, private _snackbar:MatSnackBar) { }

  ngOnInit(): void {

    if(this.data.id!='' && this.data.id!=null){
      this.api.getFoodById(this.data.id)
        .subscribe(response=>{
          this.editFood=response;
          this.comidasForm.setValue({
            id:this.editFood.id,
            entradasForm: this.editFood.entradasForm,
            jugosForm: this.editFood.jugosForm,
            platosCartaForm: this.editFood.platosCartaForm,
            postresForm: this.editFood.postresForm,
            gaseosasForm: this.editFood.gaseosasForm,
            sopasForm: this.editFood.sopasForm,
            mariscosForm: this.editFood.mariscosForm,
          });
        })
    }
  }

  saveFood(){
    if(this.comidasForm.valid){
      const editId=this.comidasForm.getRawValue().id;
      if(editId!='' && editId!=null){
        this.api.updateFood(editId,this.comidasForm.getRawValue())
          .subscribe(response =>{
            this.closeDialog();
            this._snackbar.open('Usuario Editado'),'',{
              duration:1500,
              horizontalPosition: 'Center',
              verticalPosition: 'bottom'
            }
          });
      }else{
        this.api.agregarFood(this.comidasForm.value)
          .subscribe(response =>{
            this.closeDialog();
            this._snackbar.open('Comida agregada a usuario'),'',{
              duration:1500,
              horizontalPosition: 'Center',
              verticalPosition: 'bottom'
            }
          });
      }
    }
  }
  closeDialog(){
    this.dialog.closeAll();
  }


}
