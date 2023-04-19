import { TestBed } from '@angular/core/testing';

import { ExperienciaBorradoService } from './experiencia-borrado.service';

describe('ExperienciaBorradoService', () => {
  let service: ExperienciaBorradoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExperienciaBorradoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
