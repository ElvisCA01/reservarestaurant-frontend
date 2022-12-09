import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {LoginServiceService} from "../login/login-service.service";

@Injectable({
  providedIn: 'root'
})
export class IsLoggedInGuard implements CanActivate {

  constructor(private loginService: LoginServiceService, private router: Router) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.loginService.isLoggedIn() && this.loginService.getUserRole()== "NORMAL" && this.loginService.getUserRole()=="ADMIN"){
      return true;
    }else {
      this.router.navigate(['/login'])
      return false;
    }  }
  }
