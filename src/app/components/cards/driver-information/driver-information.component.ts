import { Component, Input, OnInit } from '@angular/core';
import { Driver } from 'src/app/models/driver';
import { DriverService } from 'src/app/services/driverService/driver.service';

@Component({
  selector: 'app-driver-information',
  templateUrl: './driver-information.component.html',
  styleUrls: ['./driver-information.component.scss']
})
export class DriverInformationComponent{
  

  @Input() driver: Driver | undefined;

  constructor(private driverService:DriverService) { }

  updateDriverInformation(editDriver:Driver){
    if(editDriver && this.driver){
      this.driver.age = editDriver.age;
      this.driver.phone = editDriver.phone;

      this.driverService.updateDriver(this.driver).subscribe(
        (driver)=>{
          this.driver=driver;
        }
      );

    }
  
  }


}
