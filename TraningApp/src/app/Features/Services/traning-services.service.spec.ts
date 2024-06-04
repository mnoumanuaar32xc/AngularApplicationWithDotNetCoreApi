import { TestBed } from '@angular/core/testing';

import { TraningServicesService } from './traning-services.service';

describe('TraningServicesService', () => {
  let service: TraningServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TraningServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
