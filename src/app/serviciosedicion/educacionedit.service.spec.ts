import { TestBed } from '@angular/core/testing';

import { EducacioneditService } from './educacionedit.service';

describe('EducacioneditService', () => {
  let service: EducacioneditService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EducacioneditService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
