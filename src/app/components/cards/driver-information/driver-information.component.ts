import { Component, Input, OnInit } from '@angular/core';
import { Driver } from 'src/app/models/driver';

@Component({
  selector: 'app-driver-information',
  templateUrl: './driver-information.component.html',
  styleUrls: ['./driver-information.component.scss']
})
export class DriverInformationComponent{
  

  @Input() driver: Driver | undefined;


}
