import { TestBed } from '@angular/core/testing';

import { ShippingOrderService } from './shipping-order.service';

describe('ShippingOrderService', () => {
  let service: ShippingOrderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShippingOrderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
