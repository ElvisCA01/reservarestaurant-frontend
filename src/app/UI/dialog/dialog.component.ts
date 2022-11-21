import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AdminBookingService} from "../../services/admin-booking.service";
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Dialog2Component} from "../dialog2/dialog2.component";

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  horario: any[] = ['11:30 pm a 1:00pm','1:30 pm a 3:00 pm','3:30 pm a 5:30 pm'];
  personas: any[] = ['01','02','03','04','05','06'];
  currentDate: any=new Date();
  editBooking:any;

  form=this.fb.group({
    id:this.fb.control({value:'',disabled:true}),
    nombre:this.fb.control('',Validators.required),
    evento:this.fb.control('',Validators.required),
    personas:this.fb.control('',Validators.required),
    fecha:this.fb.control('',Validators.required),
    horario:this.fb.control('',Validators.required),
  })


  constructor(private _snackBar: MatSnackBar,private fb:FormBuilder, private api:AdminBookingService,private dialog: MatDialog,
              @Inject(MAT_DIALOG_DATA) public data:any, private _snackbar:MatSnackBar) {}


  ngOnInit(): void {

    if(this.data.id!='' && this.data.id!=null){
      this.api.getBookingById(this.data.id)
        .subscribe(response=>{
          this.editBooking=response;
          this.form.setValue({
            id:this.editBooking.id,
            nombre: this.editBooking.nombre,
            evento: this.editBooking.evento,
            personas: this.editBooking.personas,
            fecha: this.editBooking.fecha,
            horario: this.editBooking.horario,
          });
        })
    }
  }

  saveBooking(){
    if(this.form.valid){
      const editId=this.form.getRawValue().id;
      if(editId!='' && editId!=null){
        this.api.updateBooking(editId,this.form.getRawValue())
          .subscribe(response =>{
            this.openDialog2(editId);
          });
      }else{
        this.api.agregarBooking(this.form.value)
          .subscribe(response =>{
            this.openDialog2('');
            this._snackbar.open('Usuario agregado correctamente'),'',{
              duration:1500,
              horizontalPosition: 'Center',
              verticalPosition: 'bottom'
            }
          });
      }
    }
  }



  openDialog2(id:any) {
    const _dialog = this.dialog.open(Dialog2Component,{
      width:'60%',
      data:{
        id:id
      }
    })
    _dialog.afterClosed().subscribe(r=>{
    })
  }
}
