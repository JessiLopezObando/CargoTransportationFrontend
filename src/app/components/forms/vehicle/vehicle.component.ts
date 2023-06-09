import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.scss']
})
export class VehicleComponent {

  @Input() buttonText: string = "Register";
  @Output() infoVehicle: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();

  myForm: FormGroup = new FormGroup({});
  selectedOption: string = '';

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      plate: ['', [Validators.required,  Validators.pattern(/^[A-Za-z]{3}\d{3}$/)]],
      brand: ['', [Validators.required]],
      model: ['', [Validators.required, Validators.pattern(/^(200[0-9]|201[0-9]|202[0-3])$/)]],
      color: ['', [Validators.required]],
      type: ['', [Validators.required]],
      totalCapacity: ['', [Validators.required]],
    });
  }

  get plate() {
    return this.myForm.get('plate');
  }

  get brand() {
    return this.myForm.get('brand');
  }

  get model() {
    return this.myForm.get('model');
  }

  get color() {
    return this.myForm.get('color');
  }

  get type() {
    return this.myForm.get('type');
  }

  get totalCapacity() {
    return this.myForm.get('totalCapacity');
  }


  sendInfo(){
    this.infoVehicle.emit(this.myForm);
  }

}
