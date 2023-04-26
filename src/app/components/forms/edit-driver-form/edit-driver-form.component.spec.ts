import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDriverFormComponent } from './edit-driver-form.component';

describe('EditDriverFormComponent', () => {
  let component: EditDriverFormComponent;
  let fixture: ComponentFixture<EditDriverFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditDriverFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditDriverFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
