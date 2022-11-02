import { Injectable } from '@angular/core';
import {tables} from "../models/tables";

@Injectable({
  providedIn: 'root'
})
export class AdminBookingService {
  listTables: tables[] = [
    {idT: '00001', nombre:'Jose',personas: 5, eventos:'Cumpleaños', fecha: "25/12/2022", horario: '11:30 pm a 1pm'},
    {idT: '00002', nombre:'Juan',personas: 4, eventos:'Normal',fecha: "15/12/2022", horario: '11:30 pm a 1pm'},
    {idT: '00003', nombre:'Lisa',personas: 2, eventos:'Otro',fecha: "09/11/2022", horario: '11:30 pm a 1pm'},
    {idT: '00004', nombre:'Elvis',personas: 1, eventos:'Cumpleaños',fecha: "30/11/2022", horario: '11:30 pm a 1pm'},
    {idT: '00005', nombre:'Maria',personas: 2, eventos:'Normal',fecha: "20/11/2022", horario: '11:30 pm a 1pm'},
    {idT: '00006', nombre:'Jon',personas: 4, eventos:'Normal',fecha: "21/12/2022", horario: '11:30 pm a 1pm'},
  ];
  constructor() { }

  getTables(){
    return this.listTables.slice();
  }
  eliminarTableS(index:number){
    this.listTables.splice(index,1);
  }
  eliminarAllTableS(index:number){
    this.listTables.splice(index);
  }
  agregarTableS(table: tables){
    this.listTables.unshift(table);

  }

}
