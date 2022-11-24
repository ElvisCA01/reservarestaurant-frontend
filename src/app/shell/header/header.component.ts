import { Component, OnInit } from '@angular/core';
import {LoginServiceService} from "../../services/login/login-service.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public login: LoginServiceService,private router:Router) { }

  ngOnInit(): void {


  }

  public logout(){
    this.login.logout();
    this.router.navigate(['/login'])
  }


}
