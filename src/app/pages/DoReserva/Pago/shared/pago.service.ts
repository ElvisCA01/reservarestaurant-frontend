import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Pago } from './pago.model'

@Injectable({
  providedIn: 'root'
})
export class PagoService {

  private apiBase: string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  addPago(pago: Pago){
    return this.http.post(`${this.apiBase}/pago`, pago)
  }

  updatePago(pago: Pago){
    return this.http.put(`${this.apiBase}/pago`, pago)
  }

  getPago(){
    return this.http.get<Pago[]>(`${this.apiBase}/pago/listar`)
  }

  deletePago(id: number){
    return this.http.delete(`${this.apiBase}/pago/${id}`)
  }

  get(id: number){
    return this.http.get(`${this.apiBase}/pago/listar/${id}`);
  }
}
