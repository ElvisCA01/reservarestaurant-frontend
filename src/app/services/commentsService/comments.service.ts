import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Comentarios} from "../../classes/comentarios/comentarios";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  private apiBase: string = environment.baseUrl;
  private commentsUrl: String = environment.commentsUrl;

  constructor(private http:HttpClient) { }

  getComments(): Observable<Comentarios[]>{
    return this.http.get<Comentarios[]>(`${this.apiBase}/comentariosB/comentarios`);
  }
  addComments(comentario:Comentarios): Observable<Object>{
    return  this.http.post(`${this.apiBase}/comentariosB/comentarios`,comentario);
  }
  getCommentById(id:number):Observable<Comentarios>{
     return this.http.get<Comentarios>(`${this.commentsUrl}/${id}`);
  }
  deleteComment(id:number): Observable<Object>{
    return this.http.delete(`${this.commentsUrl}/${id}`);
  }
}
