import { TestBed } from '@angular/core/testing';

import { NowWeatherService } from './now-weather.service';

describe('NowWeatherService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NowWeatherService = TestBed.get(NowWeatherService);
    expect(service).toBeTruthy();
  });
});
