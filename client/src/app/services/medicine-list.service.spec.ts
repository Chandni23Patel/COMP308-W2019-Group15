import { TestBed } from '@angular/core/testing';

import { MedicineListService } from './medicine-list.service';

describe('MedicinedListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MedicineListService = TestBed.get(MedicineListService);
    expect(service).toBeTruthy();
  });
});
