import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderInformationComponent } from './order-information.component';

describe('OrderInformationComponent', () => {
  let component: OrderInformationComponent;
  let fixture: ComponentFixture<OrderInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderInformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
