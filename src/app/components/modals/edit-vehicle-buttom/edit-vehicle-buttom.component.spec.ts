import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditVehicleButtomComponent } from './edit-vehicle-buttom.component';

describe('EditVehicleButtomComponent', () => {
  let component: EditVehicleButtomComponent;
  let fixture: ComponentFixture<EditVehicleButtomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditVehicleButtomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditVehicleButtomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
