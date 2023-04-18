import { TestBed } from '@angular/core/testing';

import { ExperienciaeditService } from './experienciaedit.service';

describe('ExperienciaeditService', () => {
  let service: ExperienciaeditService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExperienciaeditService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
