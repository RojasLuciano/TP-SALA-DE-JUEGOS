import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { FirebaseErrorService } from 'src/app/services/firebase-error.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { SweetalertService } from 'src/app/services/sweetalert.service';
import { LogsService } from 'src/app/services/logs.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  // [x: string]: any;
  loginUsuario: FormGroup;
  loading = false;

  constructor(
    private fb: FormBuilder,
    private afAuth: AngularFireAuth,
    private router: Router,
    private firebaseError: FirebaseErrorService,
    private sweetAlert: SweetalertService,
    private logService: LogsService,
    private db: AngularFirestore
  ) {
    this.loginUsuario = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],

    })
  }

  login() {
    const email = this.loginUsuario.get('email')?.value;
    const password = this.loginUsuario.get('password')?.value;
    this.loading = true;
    this.afAuth.signInWithEmailAndPassword(email, password)
      .then((user) => {
        this.loading = false;
        this.sweetAlert.showSuccess('Usuario logueado con éxito', 'Login exitoso');
        this.router.navigate(['/home']);
        this.logService.registerUserLoginTime(this.loginUsuario);
      }
      ).catch(error => {
        this.loading = false;
        this.sweetAlert.showError('Error al loguear al usuario', this.firebaseError.codeError(error.code));
      }
      )
  }

  fastLogin() {
    this.loginUsuario.get('email')?.setValue('flame93@gmail.com');
    this.loginUsuario.get('password')?.setValue('Test1234');
  }

  ngOnInit(): void {
  }
}


