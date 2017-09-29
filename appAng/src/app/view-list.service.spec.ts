import { TestBed, inject } from '@angular/core/testing';

import { ViewListService } from './view-list.service';

describe('ViewListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ViewListService]
    });
  });

  it('should be created', inject([ViewListService], (service: ViewListService) => {
    expect(service).toBeTruthy();
  }));
});
