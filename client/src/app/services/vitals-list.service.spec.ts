import { TestBed } from '@angular/core/testing';

import { VitalsListService } from './vitals-list.service';

describe('VitalsListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VitalsListService = TestBed.get(VitalsListService);
    expect(service).toBeTruthy();
  });
});
