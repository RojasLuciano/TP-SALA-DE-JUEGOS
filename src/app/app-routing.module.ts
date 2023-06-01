import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component'; // Importar el componente
import { AboutMeComponent } from './components/about-me/about-me.component'; // Importar el componente
import { LoginComponent } from './components/login/login.component';
import { GamesComponent } from './components/games/games.component';
import { RegisterUserComponent } from './components/register-user/register-user.component';
import { ChatComponent } from './components/chat/chat.component';
import { HangmanComponent } from './components/hangman/hangman.component';
import { CardsComponent } from './components/cards/cards.component';
import { AskedComponent } from './components/asked/asked.component';
import { AnagramComponent } from './components/anagram/anagram.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about-me', component: AboutMeComponent },
  { path: 'games', component: GamesComponent, children: [
    { path: 'hangman', component: HangmanComponent },
    { path: 'cards', component: CardsComponent },
    { path: 'asked', component: AskedComponent },
    { path: 'anagram', component: AnagramComponent },
  ]
},
  { path: 'chat', component: ChatComponent },
  { path: 'register-user', component: RegisterUserComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
