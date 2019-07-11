import { TestBed } from '@angular/core/testing';

import { ObservableDemoService } from './observable-demo.service';

describe('ObservableDemoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ObservableDemoService = TestBed.get(ObservableDemoService);
    expect(service).toBeTruthy();
  });
});
