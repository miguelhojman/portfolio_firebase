import { TestBed } from '@angular/core/testing';

import { HabilidadBorradoService } from './habilidad-borrado.service';

describe('HabilidadBorradoService', () => {
  let service: HabilidadBorradoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HabilidadBorradoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
