import { TestBed } from '@angular/core/testing';

import { FrontConnexionService } from './front-connexion.service';

describe('FrontConnexionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FrontConnexionService = TestBed.get(FrontConnexionService);
    expect(service).toBeTruthy();
  });
});
