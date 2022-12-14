import { Component, OnInit } from '@angular/core';
import {LoginServiceService} from "../../services/login/login-service.service";

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent implements OnInit {

  user: any=null;

  constructor(public login: LoginServiceService) { }

  ngOnInit(): void {
    this.user = this.login.getUser();

  }

}
