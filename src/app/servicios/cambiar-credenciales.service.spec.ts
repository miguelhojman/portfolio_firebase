import { TestBed } from '@angular/core/testing';

import { CambiarCredencialesService } from './cambiar-credenciales.service';

describe('CambiarCredencialesService', () => {
  let service: CambiarCredencialesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CambiarCredencialesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
