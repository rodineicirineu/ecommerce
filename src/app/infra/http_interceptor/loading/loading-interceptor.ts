import { Injectable } from "@angular/core";
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { LoadingService } from "./loading.service";
import { Observable } from "rxjs";
import { finalize } from "rxjs/operators";

@Injectable()

export class LoadingInterceptor implements HttpInterceptor {

  constructor( private loadingService: LoadingService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    this.loadingService.show();
    return next.handle(req).pipe(finalize(() => this.loadingService.hide()));
  }
}
