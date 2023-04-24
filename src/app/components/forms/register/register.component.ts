import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Driver } from 'src/app/models/driver';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  firstFormGroup: FormGroup = new FormGroup({});
  secondFormGroup: FormGroup = new FormGroup({});
  isLinear = true;

  constructor() {}

  driverInfo(myForm:FormGroup){
    this.firstFormGroup = myForm;
  }

  vehicleInfo(myForm:FormGroup){
    this.secondFormGroup = myForm;
  }

  registerDriver(){
    const driver:Driver = {
      name: this.firstFormGroup.get('name')?.value,
      lastName: this.firstFormGroup.get('lastName')?.value,
      email: this.firstFormGroup.get('email')?.value,
      dni: this.firstFormGroup.get('dni')?.value,
      phone: this.firstFormGroup.get('phone')?.value,
      age: this.firstFormGroup.get('age')?.value,
      vehicle: {
        plate: this.secondFormGroup.get('plate')?.value,
        brand: this.secondFormGroup.get('brand')?.value,
        model: this.secondFormGroup.get('model')?.value,
        color: this.secondFormGroup.get('color')?.value,
        type: this.secondFormGroup.get('type')?.value,
        totalCapacity: this.secondFormGroup.get('totalCapacity')?.value,
      }
    }

    const credentials = {
      email: this.firstFormGroup.get('email')?.value,
      password: this.firstFormGroup.get('password')?.value
    }

    

  }

}
