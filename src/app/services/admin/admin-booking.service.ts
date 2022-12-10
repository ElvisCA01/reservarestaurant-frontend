import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Reserva} from "../../classes/reserva/reserva.model";
import {environment} from "../../../environments/environment"

@Injectable({
  providedIn: 'root'
})
export class AdminBookingService {

  constructor(private http:HttpClient) { }
    private apiurlReservas = environment.baseUrl;

   //Registra las reservas
   agregarReserva(reserva:Reserva){
     return this.http.post(`${this.apiurlReservas}/reserva`,reserva);
   }
  //Sirve para listar reservas
  listarReservas(){
    return this.http.get<Reserva[]>(`${this.apiurlReservas}/reserva/listar`);
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
