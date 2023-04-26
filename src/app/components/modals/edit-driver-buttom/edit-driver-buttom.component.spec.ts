import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDriverButtomComponent } from './edit-driver-buttom.component';

describe('EditDriverButtomComponent', () => {
  let component: EditDriverButtomComponent;
  let fixture: ComponentFixture<EditDriverButtomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditDriverButtomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditDriverButtomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
