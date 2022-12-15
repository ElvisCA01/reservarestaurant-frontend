import { Component, OnInit } from '@angular/core';
import {LoginServiceService} from "../../services/login/login-service.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {


  user: any=null;

  constructor(public login: LoginServiceService) { }

  ngOnInit(): void {
    this.user = this.login.getUser();
  }

  public logout(){
    this.login.logout();
    window.location.reload();
  }

}
