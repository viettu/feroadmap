import { TestBed } from '@angular/core/testing';

import { UiFwService } from './ui-fw.service';

describe('UiFwService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UiFwService = TestBed.get(UiFwService);
    expect(service).toBeTruthy();
  });
});
