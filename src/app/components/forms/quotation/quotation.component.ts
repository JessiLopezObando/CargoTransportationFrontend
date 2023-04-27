import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ShippingOrderService } from 'src/app/services/shippingOrderService/shipping-order.service';

@Component({
  selector: 'app-quotation',
  templateUrl: './quotation.component.html',
  styleUrls: ['./quotation.component.scss']
})
export class QuotationComponent implements OnInit {

  @Output() quoteInfo: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();

  quoteForm: FormGroup = new FormGroup({});
  cost: string = '';

  constructor(private formbuilder: FormBuilder, private shippingOrderService: ShippingOrderService) { }

  ngOnInit(): void {
    this.quoteForm = this.formbuilder.group({
      origin: '',
      destination: '',
      weight: 0.0,
      time: 0,
    });
  }

  get origin(){
    return this.quoteForm.get('origin')
  }

  get destination(){
    return this.quoteForm.get('destination')
  }

  get weight(){
    return this.quoteForm.get('weight')
  }

  get time(){
    return this.quoteForm.get('time')
  }

  sendInfo(){
    this.quoteInfo.emit(this.quoteForm);
  }

  calculate(){
    this.shippingOrderService.quoteShippingOrder(this.quoteForm.get('time')?.value, this.quoteForm.get('weight')?.value).subscribe((res => this.cost = res))
  }

}
