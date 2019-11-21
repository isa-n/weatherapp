import { TestBed } from '@angular/core/testing';

import { GeoLocationService } from './geolocation.service';

describe('GeolocationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GeoLocationService = TestBed.get(GeoLocationService);
    expect(service).toBeTruthy();
  });
});
