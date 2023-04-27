import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-delivery-page',
  templateUrl: './delivery-page.component.html',
  styleUrls: ['./delivery-page.component.scss']
})
export class DeliveryPageComponent implements OnInit{
  
  requestDeliveryForm: FormGroup = new FormGroup({});
  
  constructor(
    private formBuilder: FormBuilder,
    ){}


  ngOnInit(): void {
    this.requestDeliveryForm = this.formBuilder.group({
      driverId: [''],
      customerName: ['', Validators.required],
      customerEmail: ['', Validators.required],
      origin: ['', Validators.required],
      destination: ['', Validators.required],
      packageReceiver: ['', Validators.required],
      weight: ['', Validators.required],
      minutes: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  get customerName() {
    return this.requestDeliveryForm.get('customerName');
  }

  get customerEmail() {
    return this.requestDeliveryForm.get('customerEmail');
  }

  get origin() {
    return this.requestDeliveryForm.get('origin');
  }

  get destination() {
    return this.requestDeliveryForm.get('destination');
  }

  get packageReceiver() {
    return this.requestDeliveryForm.get('packageReceiver');
  }

  get weight() {
    return this.requestDeliveryForm.get('weight');
  }

  get minutes() {
    return this.requestDeliveryForm.get('minutes');
  }

  get description() {
    return this.requestDeliveryForm.get('description');
  }


  setDriverId(driverId: string){
    this.requestDeliveryForm.get("driverId")?.setValue(driverId);
  }




}
