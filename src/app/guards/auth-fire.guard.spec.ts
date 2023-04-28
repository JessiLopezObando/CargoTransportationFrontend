import { TestBed } from '@angular/core/testing';

import { AuthFireGuard } from './auth-fire.guard';

describe('AuthFireGuard', () => {
  let guard: AuthFireGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthFireGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
