import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { PrestamosService } from './prestamos.service';

describe('PrestamosService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule], // Importa HttpClientTestingModule para simular llamadas HTTP
  }));

  it('should be created', () => {
    const service: PrestamosService = TestBed.get(PrestamosService);
    expect(service).toBeTruthy();
  });
});
