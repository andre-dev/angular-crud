import { TestBed } from '@angular/core/testing';

import { MoedasService } from './moedas.service';

describe('MoedasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MoedasService = TestBed.get(MoedasService);
    expect(service).toBeTruthy();
  });
});
