import { TestBed } from '@angular/core/testing';

import { ProyectoeditService } from './proyectoedit.service';

describe('ProyectoeditService', () => {
  let service: ProyectoeditService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProyectoeditService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
