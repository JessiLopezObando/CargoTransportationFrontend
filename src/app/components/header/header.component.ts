import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Driver } from 'src/app/models/driver';
import { DriverService } from 'src/app/services/driverService/driver.service';
import { TokenService } from 'src/app/services/tokenService/token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  isLogged: boolean = false;
  driver : Driver | undefined;

  constructor(
    private driverService: DriverService,
    private tokenService: TokenService,
    private router: Router,
    private jwtAuth:JwtHelperService
    ) {}


  ngOnInit(): void {
    this.updateDriverHeader();
    this.checkIfLogged();
  }


  updateDriverHeader(){
    this.tokenService.loadToken();
    this.tokenService.getToken().subscribe((token) => {
      if (!this.jwtAuth.isTokenExpired(token)) {
        this.driverService.getDriverByEmail(this.jwtAuth.decodeToken(token).email).subscribe((customer) => {
          this.driver = customer;
        } );
      }else{
        this.driver = undefined;
        this.isLogged = false;
      }
    } );
  }

  checkIfLogged() {
    this.tokenService.isLogged().subscribe((logged) => {
      this.isLogged = logged;
      });
  }

  logout() {
    this.tokenService.closeSession();
    this.updateDriverHeader();
    this.router.navigate([this.router.url], { skipLocationChange: true }).then(() => {
      window.location.reload();
    });
  }

  isDashboardRoute(): boolean {
    const currentUrl = this.router.url;
    return /^(\/|\/dashboard|\/login)$/.test(currentUrl);
  }

  isDeliverRoute():boolean{
    const currentUrl = this.router.url;
    return /^(\/|\/delivery-request|\/)$/.test(currentUrl);
  }

  isHomeRoute():boolean{
    const currentUrl = this.router.url;
    return /^(\/|\/home)$/.test(currentUrl);
  }
  

}
