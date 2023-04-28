import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelInformationComponent } from './label-information.component';

describe('LabelInformationComponent', () => {
  let component: LabelInformationComponent;
  let fixture: ComponentFixture<LabelInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabelInformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LabelInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
