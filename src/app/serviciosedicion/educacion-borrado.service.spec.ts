import { TestBed } from '@angular/core/testing';

import { EducacionBorradoService } from './educacion-borrado.service';

describe('EducacionBorradoService', () => {
  let service: EducacionBorradoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EducacionBorradoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
