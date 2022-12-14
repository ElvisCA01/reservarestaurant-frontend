import { Component, OnInit } from '@angular/core';
import {Comentarios} from "../../../../classes/comentarios/comentarios";
import {CommentsService} from "../../../../services/commentsService/comments.service";
import {LoginServiceService} from "../../../../services/login/login-service.service";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  comentarios: Comentarios[];

  constructor(public login: LoginServiceService,private comentariosService: CommentsService) { }

  ngOnInit(): void {
    this.getComments();
  }

  getComments(){
    this.comentariosService.getComments()
      .subscribe((dato:any) =>{
        this.comentarios = dato;
      })
  }

  deleteComment(id: number){
    this.comentariosService.deleteComment(id)
      .subscribe(res=>{
        console.log(res);
        this.getComments();
      })
  }

  isAdmin(){
    if(this.login.getUserRole()=="ADMIN"){
      return true;
    }else{
      return false;
    }
  }

}
