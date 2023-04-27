import { Component, Input, OnInit } from '@angular/core';
import { ShippingOrderService } from 'src/app/services/shippingOrderService/shipping-order.service';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.scss']
})
export class OrderSummaryComponent{

  @Input() summaryOrder:any;
  @Input() cost:number=0;

  constructor(){}


}
