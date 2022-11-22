import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Reserva} from "../classes/reserva";

@Injectable({
  providedIn: 'root'
})
export class AdminBookingService {

  constructor(private http:HttpClient) { }
    private apiurlReservas = 'http://localhost:8080/api/reservas';
    apiurlComidas  = '';



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




}
