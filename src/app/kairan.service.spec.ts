import { TestBed } from '@angular/core/testing';

import { KairanService } from './kairan.service';

describe('KairanService', () => {
  let service: KairanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KairanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
