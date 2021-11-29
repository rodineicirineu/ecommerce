import { Injectable } from "@angular/core";
import { HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { AuthService } from "../../auth/service/auth.service";

@Injectable()

export class AuthInterceptor implements HttpInterceptor {

  constructor( private loginService: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler){
    const token = this.loginService.getToken();
    let request: HttpRequest<any> = req;

    if (token) {
      request = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${token}`)
      });
    }
    return next.handle(request)
    .pipe()
  }

}
