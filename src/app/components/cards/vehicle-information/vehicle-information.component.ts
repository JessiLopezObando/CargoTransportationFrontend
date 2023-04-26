import { Component, Input, OnInit } from '@angular/core';
import { Driver } from 'src/app/models/driver';
import { Vehicle } from 'src/app/models/vehicle';
import { DriverService } from 'src/app/services/driverService/driver.service';

@Component({
  selector: 'app-vehicle-information',
  templateUrl: './vehicle-information.component.html',
  styleUrls: ['./vehicle-information.component.scss']
})
export class VehicleInformationComponent {

  

  @Input() driver: Driver | undefined;

  constructor(private driverService:DriverService) { }

  updateVehicleInformation(vehicle:Vehicle){
    if(this.driver){
      this.driver.vehicle.plate=vehicle.plate;
      this.driver.vehicle.model=vehicle.model;
      this.driver.vehicle.color=vehicle.color;
      this.driver.vehicle.brand=vehicle.brand;
      this.driver.vehicle.type=vehicle.type;
      this.driver.vehicle.totalCapacity=vehicle.totalCapacity;

      console.log(this.driver);

      this.driverService.updateDriver(this.driver).subscribe((driver)=>{
        this.driver=driver;
      } );
    }
  
  }

  
}
