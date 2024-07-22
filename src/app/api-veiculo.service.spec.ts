import { TestBed } from '@angular/core/testing';

import { ApiVeiculoService } from './api-veiculo.service';

describe('ApiVeiculoService', () => {
  let service: ApiVeiculoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiVeiculoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
