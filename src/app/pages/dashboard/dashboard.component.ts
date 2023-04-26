import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Driver } from 'src/app/models/driver';
import { DriverService } from 'src/app/services/driverService/driver.service';
import { TokenService } from 'src/app/services/tokenService/token.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  
  driver:Driver | undefined;

  constructor(private driverService:DriverService,private jwtAuth:JwtHelperService,
    private tokenService:TokenService) { }


  ngOnInit(): void {
    this.tokenService.loadToken();
    this.tokenService.getToken().subscribe((token) => {
      if (token) {
        this.driverService.getDriverByEmail(this.jwtAuth.decodeToken(token).email).subscribe((customer) => {
          this.driver = customer;
        } );
      }
    } );
  }



}
