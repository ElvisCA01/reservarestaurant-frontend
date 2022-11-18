import { Injectable } from '@angular/core';
import {tables} from "../models/tables";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AdminBookingService {

  constructor(private http:HttpClient) { }
    apiurlReservas = 'http://localhost:3000/BookingList/';
    apiurlComidas  = 'http://localhost:3000/Comidas/';


   getBookings():Observable<tables[]>{
      return this.http.get<tables[]>(this.apiurlReservas);
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
