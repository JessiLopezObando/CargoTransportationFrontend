import { Component, EventEmitter, Inject, Input, Output } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { EditVehicleButtomComponent } from "../../modals/edit-vehicle-buttom/edit-vehicle-buttom.component";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: "app-edit-vehicle-form",
  templateUrl: "./edit-vehicle-form.component.html",
  styleUrls: ["./edit-vehicle-form.component.scss"],
})
export class EditVehicleFormComponent {

  
  myForm: FormGroup = new FormGroup({});
  selectedOption: string = '';

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<EditVehicleButtomComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      plate: [this.data.driver.vehicle.plate, [Validators.required,  Validators.pattern(/^[A-Za-z]{3}\d{3}$/)]],
      brand: [this.data.driver.vehicle.brand, [Validators.required]],
      model: [this.data.driver.vehicle.model, [Validators.required]],
      color: [this.data.driver.vehicle.color, [Validators.required]],
      type: [ this.data.driver.vehicle.type, [Validators.required]],
      totalCapacity: [  this.data.driver.vehicle.totalCapacity, [Validators.required]],
    });
  }

  get plate() {
    return this.myForm.get("plate");
  }

  get brand() {
    return this.myForm.get("brand");
  }

  get model() {
    return this.myForm.get("model");
  }

  get color() {
    return this.myForm.get("color");
  }

  get type() {
    return this.myForm.get("type");
  }

  get totalCapacity() {
    return this.myForm.get("totalCapacity");
  }

}
