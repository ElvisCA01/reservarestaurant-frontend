import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";
import {LoginServiceService} from "../../../services/login/login-service.service";


@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {

  user: any=null;

  constructor(private titulo:Title,public login: LoginServiceService) {
      titulo.setTitle('Pagina principal')
  }

  ngOnInit(): void {
    this.user = this.login.getUser();
  }



}
