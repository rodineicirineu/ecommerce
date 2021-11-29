import { EventEmitter, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../service/auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(private router: Router, private authservice: AuthService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      if (this.authservice.logged()) {
        this.mostrarMenuEmitter.emit(true);
        return true
      } else {
        this.router.navigate(['/auth/'])
        this.mostrarMenuEmitter.emit(false);
        return false
      }

    return true;
  }

}
