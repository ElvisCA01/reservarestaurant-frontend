import { Component, OnInit } from '@angular/core';
import {Comentarios} from "../../../../classes/comentarios/comentarios";
import {CommentsService} from "../../../../services/commentsService/comments.service";
import {LoginServiceService} from "../../../../services/login/login-service.service";
import Swal from "sweetalert2";

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
    Swal.fire({
      title: '¿Estás seguro qué deseas eliminar el comentario?',
      text: "La acción no se puede revertir",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar!'
    }).then((result:any) => {
      if (result.isConfirmed) {
        this.comentariosService.deleteComment(id).subscribe(()=>{
          this.getComments();
        })
        Swal.fire(
          'Eliminado!',
          'Eliminaste el comentario.',
          'success'
        ).then(okay =>{
          if(okay){
            window.location.reload();
          }
        })
      }
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
