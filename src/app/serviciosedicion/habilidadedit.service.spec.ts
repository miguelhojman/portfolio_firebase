import { TestBed } from '@angular/core/testing';

import { HabilidadeditService } from './habilidadedit.service';

describe('HabilidadeditService', () => {
  let service: HabilidadeditService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HabilidadeditService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
