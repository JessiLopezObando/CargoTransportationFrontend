import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from '../services/tokenService/token.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthFireGuard implements CanActivate {

  constructor(private authJwt: JwtHelperService, private router: Router, private tokenService:TokenService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      let token = '';

      this.tokenService.loadToken();

      this.tokenService.getToken().subscribe(tk=>token=tk)
  
      if (token) {
        if (!this.authJwt.isTokenExpired(token)) return true;
      }
  
      this.router.navigate(['/login']);
  
      return false;
  }
  
}
