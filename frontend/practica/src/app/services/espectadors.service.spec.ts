import { TestBed } from '@angular/core/testing';

import { EspectadorsService } from './espectadors.service';

describe('EspectadorsService', () => {
  let service: EspectadorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EspectadorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
