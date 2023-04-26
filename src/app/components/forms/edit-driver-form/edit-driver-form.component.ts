import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-driver-form',
  templateUrl: './edit-driver-form.component.html',
  styleUrls: ['./edit-driver-form.component.scss']
})
export class EditDriverFormComponent {

  myForm: FormGroup = new FormGroup({});
  isNotEditable = true;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<EditDriverFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      name:  {value: this.data.driver.name, disabled: true},
      lastName: {value: this.data.driver.lastName, disabled: true},
      email: {value: this.data.driver.email, disabled: true},
      dni: {value: this.data.driver.dni, disabled: true},
      phone: [this.data.driver.phone, [Validators.required]],
      age: [this.data.driver.age, [Validators.required,Validators.min(18), Validators.max(65)]],
    });
  }

  get name() {
    return this.myForm.get('name');
  }

  get lastName() {
    return this.myForm.get('lastName');
  }

  get email() {
    return this.myForm.get('email');
  }

  get phone() {
    return this.myForm.get('phone');
  }

  get age() {
    return this.myForm.get('age');
  }

  get dni() {
    return this.myForm.get('dni');
  }

}
