import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverInformationComponent } from './driver-information.component';

describe('DriverInformationComponent', () => {
  let component: DriverInformationComponent;
  let fixture: ComponentFixture<DriverInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DriverInformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DriverInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
