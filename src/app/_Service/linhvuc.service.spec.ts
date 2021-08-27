import { TestBed } from '@angular/core/testing';
import {LinhVucService} from './linhvuc.service';

describe('LinhvucService', () => {
  let service: LinhVucService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LinhVucService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
