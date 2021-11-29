import { TestBed } from '@angular/core/testing';
import { MaterialModule } from '../modules/material/material.module';

import { SnackbarService } from './snackbar.service';

describe('SnackbarService', () => {
  let service: SnackbarService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule]
    });
    service = TestBed.inject(SnackbarService);
  });


  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
