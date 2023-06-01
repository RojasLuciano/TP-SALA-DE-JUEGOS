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
import { ChatComponent } from './components/chat/chat.component';
import { HangmanComponent } from './components/hangman/hangman.component';
import { HttpClientModule } from '@angular/common/http';
import { AnagramComponent } from './components/anagram/anagram.component';

const firebaseConfig = {
  apiKey: "AIzaSyBno1uXJw6birRZgQFOKOgMs3CWo3shdYk",
  authDomain: "labo4-241ef.firebaseapp.com",
  projectId: "labo4-241ef",
  storageBucket: "labo4-241ef.appspot.com",
  messagingSenderId: "452483955767",
  appId: "1:452483955767:web:cfe13408823c63659c93b2",
  measurementId: "G-MG7RC5CTNL"
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AboutMeComponent,
    GamesComponent,
    SpinnerComponent,
    RegisterUserComponent,
    ChatComponent ,
    HangmanComponent,
    AnagramComponent
     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
