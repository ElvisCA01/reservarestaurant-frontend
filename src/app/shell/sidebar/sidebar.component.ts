import { Component, OnInit } from '@angular/core';
import {LoginServiceService} from "../../services/login/login-service.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  user: any = null;

  constructor(public login: LoginServiceService) {
  }

  ngOnInit(): void {
    this.user = this.login.getUser();

  }

  isLoggedInAdmin() {
    if (this.login.getUserRole() == "ADMIN"){
      return true;
    }else{
      return false;
    }
  }

}
