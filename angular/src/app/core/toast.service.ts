import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';

type ToastType = 'ERROR' | 'SUCCESS';

@Injectable()
class ToastService {

  constructor(private snackBar: MatSnackBar) {}

  show(type: ToastType, message: string, action: string = 'Close') {
    const config: MatSnackBarConfig = {};

    if (type === 'SUCCESS') {
      config.duration = 5000;
    }
    this.snackBar.open(message, action, config);
  }
}

export default ToastService;
