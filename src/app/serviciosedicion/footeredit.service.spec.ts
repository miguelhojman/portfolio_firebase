import { TestBed } from '@angular/core/testing';

import { FootereditService } from './footeredit.service';

describe('FootereditService', () => {
  let service: FootereditService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FootereditService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
