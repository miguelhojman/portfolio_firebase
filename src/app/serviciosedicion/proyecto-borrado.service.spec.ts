import { TestBed } from '@angular/core/testing';

import { ProyectoBorradoService } from './proyecto-borrado.service';

describe('ProyectoBorradoService', () => {
  let service: ProyectoBorradoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProyectoBorradoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
