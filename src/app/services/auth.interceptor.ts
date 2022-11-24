import {HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {LoginServiceService} from "./login/login-service.service";
import {Observable} from "rxjs";


@Injectable()
export class AuthInterceptor implements  HttpInterceptor{

  constructor(private loginService:LoginServiceService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authReq = req;
    const token = this.loginService.getToken();
    if(token!=null){
      authReq = authReq.clone({
        setHeaders: {Authorization: `Bearer ${token}`}
      })
    }
    return next.handle(authReq);
  }
}

export const authInterceptorProviders = [
  {
    provide : HTTP_INTERCEPTORS,
    useClass : AuthInterceptor,
    multi : true
  }
]
