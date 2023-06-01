import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class SweetalertService {

  constructor() { }

  showSuccess(title: string, text: string) {
    Swal.fire({
      icon: 'success',
      title: title,
      text: text,
      showConfirmButton: false,
      timer: 2000
    });
  }

  showError(title: string, text: string) {
    Swal.fire({
      icon: 'error',
      title: title,
      text: text,
      confirmButtonText: 'Cerrar'
    });
  }

  showWarning(title: string, text: string) {
    Swal.fire({
      icon: 'warning',
      title: title,
      text: text,
      showConfirmButton: false,
      timer: 2000
    });
  }
}
