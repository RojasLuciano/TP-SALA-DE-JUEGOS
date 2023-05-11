import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { GamesComponent } from './components/games/games.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SpinnerComponent } from 'src/utils/spinner/spinner.component';
import { AngularFireModule } from '@angular/fire/compat';
import { RegisterUserComponent } from './components/register-user/register-user.component';

const firebaseConfig = {
  apiKey: "AIzaSyDO-f1H-ovvRYrjTa1bWnvlnBcrYXnEBoI",
  authDomain: "my-login-48757.firebaseapp.com",
  projectId: "my-login-48757",
  storageBucket: "my-login-48757.appspot.com",
  messagingSenderId: "558322019754",
  appId: "1:558322019754:web:a6c2076da717764e154fd3",
  measurementId: "G-95GXTMQ8R3"
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AboutMeComponent,
    GamesComponent,
    SpinnerComponent,
    RegisterUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
