import { TestBed } from '@angular/core/testing';

import { DatosEducacionService } from './datos-educacion.service';

describe('DatosEducacionService', () => {
  let service: DatosEducacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatosEducacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
