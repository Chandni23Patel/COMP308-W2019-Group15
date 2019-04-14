import { TestBed } from '@angular/core/testing';

import { AppointmentListService } from './appointment-list.service';

describe('AppointmentListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppointmentListService = TestBed.get(AppointmentListService);
    expect(service).toBeTruthy();
  });
});
