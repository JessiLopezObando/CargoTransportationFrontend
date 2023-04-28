import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private tokenStorage: BehaviorSubject<string>;
  private logged: BehaviorSubject<boolean>;

  constructor(private jwtAuth:JwtHelperService) {
    this.tokenStorage = new BehaviorSubject('')
    this.logged = new BehaviorSubject(false);
   }

   setToken(token:string){
    this.tokenStorage.next(token || '');
    this.logged.next(!this.jwtAuth.isTokenExpired(token));
   }

   getToken():Observable<string>{
    return this.tokenStorage.asObservable();
   }

   loadToken(){
    this.tokenStorage.next(localStorage.getItem('token') || '');
    this.logged.next(!this.jwtAuth.isTokenExpired(localStorage.getItem('token') || ''));
   }

   closeSession(){
    localStorage.removeItem('token');
   }

    isLogged():Observable<boolean>{
      return this.logged.asObservable();
    }
}
