import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleAvailableInformationComponent } from './vehicle-available-information.component';

describe('VehicleAvailableInformationComponent', () => {
  let component: VehicleAvailableInformationComponent;
  let fixture: ComponentFixture<VehicleAvailableInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicleAvailableInformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehicleAvailableInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
