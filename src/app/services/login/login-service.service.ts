import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {



  constructor(private http:HttpClient) { }

  public añadirUsuario(user:any){
    return this.http.post(`${environment.baseUrl}/usuarios/`,user);
  }


}
