import { Component, OnInit } from '@angular/core';
import {LoginServiceService} from "../../services/login/login-service.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user: any=null;

  constructor(private loginService:LoginServiceService) { }

  ngOnInit(): void {
    this.user = this.loginService.getUser();

  }

}
