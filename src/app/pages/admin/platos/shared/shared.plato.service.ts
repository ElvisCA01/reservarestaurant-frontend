import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {Plato} from "../../../../classes/plato/plato.model"

@Injectable({
  providedIn: 'root'
})
export class SharedPlatoService {

  private apiBase: string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  addPlato(plato: Plato){
    return this.http.post(`${this.apiBase}/plato`, plato)
  }

  updatePlato(plato: Plato){
    return this.http.put(`${this.apiBase}/plato`, plato)
  }

  getPlato(){
    return this.http.get<Plato[]>(`${this.apiBase}/plato/listar`)
  }

  deletePlato(id: number){
    return this.http.delete(`${this.apiBase}/plato/${id}`)
  }

}
