import { AuthService } from './../servicios/auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ControlBienvenidaGuard implements CanActivate {

  control: string = '';

  constructor(private auth: AuthService, private routes: Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      this.control = this.auth.getData('controlInicial')!;

      if(this.control == 'activado'){
        this.routes.navigateByUrl('ingreso');
        return false
      }
      else
        return true

  }
}
