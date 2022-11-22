import { Injectable } from '@angular/core';
import {tables} from "../models/tables";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Reserva} from "../classes/reserva";

@Injectable({
  providedIn: 'root'
})
export class AdminBookingService {

  constructor(private http:HttpClient) { }
    private apiurlReservas = 'http://localhost:8080/api/reservas';
    apiurlComidas  = 'http://localhost:3000/Comidas/';



    //Consigue las reservas
   getBookings():Observable<Reserva[]>{
      return this.http.get<Reserva[]>(this.apiurlReservas);
   }

   //Registra las reservas
   registrarReserva(reserva:Reserva): Observable<any>{
     return this.http.post(this.apiurlReservas,reserva);
   }
  //Sirve para obtener o buscar una reserva
  obtenerReservaPorId(id:number):Observable<any>{
    return this.http.get<Reserva>(`${this.apiurlReservas}/${id}`);
  }
   //Actualiza la reserva
  actualizarReserva(id:number,reserva:Reserva):Observable<any>{
    return this.http.put(`${this.apiurlReservas}/${id}`,reserva)
  }

  //Elimina la reserva
  eliminarReserva(id:number):Observable<any>{
     return this.http.delete(`${this.apiurlReservas}/${id}`);
  }







  getBookingById(id:any):Observable<tables>{
    return this.http.get<tables>(this.apiurlReservas+'/'+id);
  }
  removeBookingById(id:any){
    return this.http.delete<tables>(this.apiurlReservas+'/'+id);
  }
   agregarBooking(booking:any){
     return this.http.post(this.apiurlReservas,booking);
   }
  updateBooking(id:any,booking:any){
    return this.http.put(this.apiurlReservas+'/'+id,booking);
  }
  getFoods():Observable<tables[]>{
    return this.http.get<tables[]>(this.apiurlComidas);
  }
  getFoodById(id:any):Observable<tables>{
    return this.http.get<tables>(this.apiurlComidas+'/'+id);
  }
  agregarFood(food:any){
    return this.http.post(this.apiurlComidas,food);
  }
  updateFood(id:any,food:any){
    return this.http.put(this.apiurlComidas+'/'+id,food);
  }
  removeFoodById(id:any){
    return this.http.delete<tables>(this.apiurlComidas+'/'+id);
  }
}
