import { TestBed } from '@angular/core/testing';

import { MatSnackBar } from '@angular/material';
import ToastService from '@/core/toast.service';

describe('Service: ToastService', () => {
  let service: ToastService;
  let snackBarSpy: jasmine.SpyObj<MatSnackBar>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('MatSnackBar', ['open']);

    TestBed.configureTestingModule({
      providers: [
        ToastService,
        { provide: MatSnackBar, useValue: spy }
      ]
    });
    service = TestBed.get(ToastService);
    snackBarSpy = TestBed.get(MatSnackBar);
  });


  it('should open error in snackbar and not dismiss it', () => {
    const type = 'ERROR';
    const message = 'My message';

    service.show(type, message);

    expect(snackBarSpy.open).toHaveBeenCalledWith(message, 'Close', {});
  });

  it('should open success in snackbar and dismiss it', () => {
    const type = 'SUCCESS';
    const message = 'My message';
    const config = {
     duration: 5000,
    };
    const action = 'Other';

    service.show(type, message, action);

    expect(snackBarSpy.open).toHaveBeenCalledWith(message, action, config);
  });
});
