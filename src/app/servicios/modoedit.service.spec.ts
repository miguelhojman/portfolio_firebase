import { TestBed } from '@angular/core/testing';

import { ModoeditService } from './modoedit.service';

describe('ModoeditService', () => {
  let service: ModoeditService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModoeditService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
