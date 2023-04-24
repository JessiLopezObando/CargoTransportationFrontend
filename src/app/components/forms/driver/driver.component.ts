import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.scss']
})
export class DriverComponent implements OnInit {

  @Input() buttonText: string = "Register";
  @Output() infoDriver: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();

  myForm: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      name: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
      age: ['', [Validators.required,Validators.min(18), Validators.max(65)]],
      password: ['', [Validators.required, Validators.minLength(4)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(4)]],
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

  get password() {
    return this.myForm.get('password');
  }

  get confirmPassword() {
    return this.myForm.get('confirmPassword');
  }

  sendInfo(){
    this.infoDriver.emit(this.myForm);
  }

  

}
