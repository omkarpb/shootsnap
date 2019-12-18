import { TestBed } from '@angular/core/testing';

import { SnapsService } from './snaps.service';

describe('SnapsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SnapsService = TestBed.get(SnapsService);
    expect(service).toBeTruthy();
  });
});
