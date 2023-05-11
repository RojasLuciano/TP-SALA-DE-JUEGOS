import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { FirebaseErrorService } from './firebase-error.service';
import { SweetalertService } from 'src/app/services/sweetalert.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private afauth: AngularFireAuth, private router: Router, private firebaseError: FirebaseErrorService, private sweetAlert: SweetalertService) { }

  async login(email: string, password: string) {

    return await this.afauth.signInWithEmailAndPassword(email, password)
      .then(res => this.router.navigate(['home']))
      .catch(error => {
        this.sweetAlert.showError('Error al loguear al usuario', this.firebaseError.codeError(error.code));
      })
  }

  async register(email: string, password: string) {
    return await this.afauth.createUserWithEmailAndPassword(email, password).then(res => this.router.navigate([''])).catch(error => {
      this.sweetAlert.showError('Error al registrar al usuario', this.firebaseError.codeError(error.code));
    });
  }

  async logout() {
    return await this.afauth.signOut().then(res => this.router.navigate(['login'])).catch(error => {
      ;
      throw new Error('Error en desloguearse');
    });
  }

  getAuth() {
    return this.afauth.authState; // devuelve el usuario completo.
  }

} // End of AuthService class
