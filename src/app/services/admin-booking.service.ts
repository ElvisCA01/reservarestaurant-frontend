import { Injectable } from '@angular/core';
import {tables} from "../models/tables";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AdminBookingService {

  constructor(private http:HttpClient) { }
    apiurl = 'http://localhost:3000/BookingList/';

   getBookings():Observable<tables[]>{
      return this.http.get<tables[]>(this.apiurl);
   }
  getBookingById(id:any):Observable<tables>{
    return this.http.get<tables>(this.apiurl+'/'+id);
  }
  removeBookingById(id:any){
    return this.http.delete<tables>(this.apiurl+'/'+id);
  }
   agregarBooking(booking:any){
     return this.http.post(this.apiurl,booking);
   }
  updateBooking(id:any,booking:any){
    return this.http.put(this.apiurl+'/'+id,booking);
  }
}
