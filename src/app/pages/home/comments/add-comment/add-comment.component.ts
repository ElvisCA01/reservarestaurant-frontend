import { Component, OnInit } from '@angular/core';
import {Comentarios} from "../../../../classes/comentarios/comentarios";
import {CommentsService} from "../../../../services/commentsService/comments.service";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.scss']
})
export class AddCommentComponent implements OnInit {


  Comentarios : Comentarios = new Comentarios();

  constructor(private _snackbar:MatSnackBar,private commentService: CommentsService,private router: Router) { }

  ngOnInit(): void {


  }

  saveComment(){
    this.commentService.addComments(this.Comentarios)
      .subscribe(res=>{
        console.log(res);
        this.navigateToComments();
      })
  }


  navigateToComments(){
    this.router.navigate(["/comentarios"]);
  }

  onSubmit(){
    this.saveComment();
  }

}
