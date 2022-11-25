import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {LoginServiceService} from "../login/login-service.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private loginService: LoginServiceService, private router: Router, private _snackBar: MatSnackBar) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.loginService.isLoggedIn() && this.loginService.getUserRole()== "ADMIN"){
      return true;
    }else {
      this._snackBar.open('No estas conectado como administrador!','',{
        duration: 5000,
        horizontalPosition: 'center',
        verticalPosition: "bottom"
      })
      this.router.navigate(['/login'])
      return false;
    }

  }

}
