import { TestBed } from '@angular/core/testing';

import { ThreeHoursWeatherService } from './three-hours-weather.service';

describe('ThreeHoursWeatherService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ThreeHoursWeatherService = TestBed.get(ThreeHoursWeatherService);
    expect(service).toBeTruthy();
  });
});
