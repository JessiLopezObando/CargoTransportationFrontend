import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Driver } from 'src/app/models/driver';

@Component({
  selector: 'app-vehicle-available-information',
  templateUrl: './vehicle-available-information.component.html',
  styleUrls: ['./vehicle-available-information.component.scss']
})
export class VehicleAvailableInformationComponent {

  @Input() driver:Driver | undefined;
  @Output() driverId:EventEmitter<string> = new EventEmitter<string>();


  selectVehicle(driverId:string){
    this.driverId.emit(driverId);
  }


  

}
