import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ShippingOrder } from 'src/app/models/shippingOrder';

@Component({
  selector: 'app-order-information',
  templateUrl: './order-information.component.html',
  styleUrls: ['./order-information.component.scss']
})
export class OrderInformationComponent {

  @Input() shippingOrder:ShippingOrder | undefined;
  @Output() shippingOrderAccepted:EventEmitter<string> = new EventEmitter<string>();
  @Output() shippingOrderRejected:EventEmitter<string> = new EventEmitter<string>();
  @Output() shippingOrderDelivered:EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  onAccept(){
    this.shippingOrderAccepted.emit(this.shippingOrder?.id);
  }

  onReject(){
    this.shippingOrderRejected.emit(this.shippingOrder?.id);
  }

  onDelivered(){
    this.shippingOrderDelivered.emit(this.shippingOrder?.id);
  }


}
