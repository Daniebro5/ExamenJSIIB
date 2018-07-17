import { TestBed, inject } from '@angular/core/testing';

import { ServicioMarcasService } from './servicio-marcas.service';

describe('ServicioMarcasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServicioMarcasService]
    });
  });

  it('should be created', inject([ServicioMarcasService], (service: ServicioMarcasService) => {
    expect(service).toBeTruthy();
  }));
});
