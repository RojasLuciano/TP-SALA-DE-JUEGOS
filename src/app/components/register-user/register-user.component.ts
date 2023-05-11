import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { FirebaseErrorService } from 'src/app/services/firebase-error.service';
import { SweetalertService } from 'src/app/services/sweetalert.service';

@Component({
  selector: 'app-register-users',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss']
})
export class RegisterUserComponent implements OnInit {
  registrarUsuario : FormGroup;
  loading = false;

  constructor(private fb: FormBuilder, 
    private afAuth: AngularFireAuth,    
    private router: Router,          
    private firebaseError: FirebaseErrorService,
    private sweetAlert: SweetalertService,

    ) { 
    this.registrarUsuario = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      repetirPassword: ['',Validators.required],
  })
  }

register(){
  const email = this.registrarUsuario.get('email')?.value;
  const password = this.registrarUsuario.get('password')?.value;
  const repetirPassword = this.registrarUsuario.get('repetirPassword')?.value;

  if(password !== repetirPassword){
    this.sweetAlert.showError('Las contraseñas no coinciden', 'Error');
    return;
  }
  this.loading = true;                                                         
  this.afAuth.createUserWithEmailAndPassword(email,password)
  .then(() => {
    this.loading = false;                                                      
    this.sweetAlert.showSuccess('Usuario registrado con éxito', 'Registro exitoso');
    this.router.navigate(['/home']);                                         
  }).catch(error => {
    this.loading = false;                                                       
    this.sweetAlert.showError('Error al registrar al usuario', this.firebaseError.codeError(error.code));                   
  })
}

  ngOnInit(): void {
    this.registrarUsuario = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      repetirPassword: ['', Validators.required],
    })
    }
}  
