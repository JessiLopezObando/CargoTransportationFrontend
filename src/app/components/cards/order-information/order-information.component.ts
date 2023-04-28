import { OnInit } from '@angular/core';
import { OnChanges } from '@angular/core';
import { SimpleChanges } from '@angular/core';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Driver } from 'src/app/models/driver';
import { ShippingOrder } from 'src/app/models/shippingOrder';
import { Vehicle } from 'src/app/models/vehicle';

@Component({
  selector: 'app-order-information',
  templateUrl: './order-information.component.html',
  styleUrls: ['./order-information.component.scss']
})
export class OrderInformationComponent implements OnInit, OnChanges{

  @Input() shippingOrder:ShippingOrder | undefined;
  @Input() driver:Driver | undefined;  
  @Output() shippingOrderAccepted:EventEmitter<string> = new EventEmitter<string>();
  @Output() shippingOrderRejected:EventEmitter<string> = new EventEmitter<string>();
  @Output() shippingOrderDelivered:EventEmitter<string> = new EventEmitter<string>();

  isDisabled: boolean = false;
  weight: number = 0;  

  ngOnInit(){
    this.weight = (this.driver?.vehicle?.currentCapacity || 0) + (this.shippingOrder?.weight || 0)    
    this.availableWeight();
  }
  ngOnChanges(changes: SimpleChanges) {

    this.availableWeight();

  }

  onAccept(){
    this.shippingOrderAccepted.emit(this.shippingOrder?.id);
  }

  onReject(){
    this.shippingOrderRejected.emit(this.shippingOrder?.id);
  }

  onDelivered(){
    this.shippingOrderDelivered.emit(this.shippingOrder?.id);
  }

  private availableWeight(){
    this.weight = (this.driver?.vehicle?.currentCapacity || 0) + (this.shippingOrder?.weight || 0)
    

    if (this.weight > (this.driver?.vehicle?.totalCapacity || 0)){
      
      this.isDisabled = true
    }
    else {
      this.isDisabled = false
    }    

  }

}
  
  

  


  
    
    

  



