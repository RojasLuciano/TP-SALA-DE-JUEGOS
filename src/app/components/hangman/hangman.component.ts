import { Component, OnInit } from '@angular/core';
import { HangmanService } from 'src/app/services/hangman/hangman.service';
import { RankingService } from 'src/app/services/ranking/ranking.service';

@Component({
  selector: 'app-hangman',
  templateUrl: './hangman.component.html',
  styleUrls: ['./hangman.component.scss']
})
export class HangmanComponent implements OnInit {

  word = '';
  hiddenWord = '';
  tries = 0;
  win = false;
  lost = false;
  triesImg = "assets/img/hangman/hangman0.png";
  letterButton:boolean = false;
  data:any;
  pointUser: number = 0;


  constructor( private service2: HangmanService,
    private ranking: RankingService) { }

  ngOnInit(): void {
    this.storeWord();
  }
  
  storeWord() {
    this.service2.getRandomWord().subscribe((data) => {
      this.data = data;
      this.word = data.toString().toUpperCase().normalize("NFD").replace(/\p{Diacritic}/gu, "");
      this.hiddenWord = '_ '.repeat(this.word.length);
      console.log(this.word);
    });    
  }

  actionMethod(event: any) {
    event.target.disabled = true;
  }

  chosenOption(option: string) {
   
    if (this.word.indexOf(option) === -1) {
      this.tries++;
    }

    if(this.tries === 1){
      this.triesImg = "assets/img/hangman/hangman1.png"
    }

    if(this.tries === 2){
      this.triesImg = "assets/img/hangman/hangman2.png"
    }

    if(this.tries === 3){
      this.triesImg = "assets/img/hangman/hangman3.png"
    }

    if(this.tries === 4){
      this.triesImg = "assets/img/hangman/hangman4.png"
    }

    if(this.tries === 5){
      this.triesImg = "assets/img/hangman/hangman5.png"
    }

    if(this.tries === 6){
      this.triesImg = "assets/img/hangman/hangman6.png"
    }

    const hiddenWordArray = this.hiddenWord.split(' ');

    for (let i = 0; i < this.word.length; i++) {
      if (this.word[i] === option) {
        hiddenWordArray[i] = option;
      }
    }

    this.hiddenWord = hiddenWordArray.join(' ');
    this.checkGame();  
  }

  checkGame() {

    const wordArray = this.hiddenWord.split(' ');
    const wordCheck = wordArray.join('');

    if (wordCheck === this.word) {
      this.letterButton = true;
      this.win = true;
      this.triesImg = "assets/img/hangman/hangmanWon.png"
      this.pointUser == 0 ? this.pointUser = 3 : this.pointUser *= Math.floor(Math.random() * (1 - 0) + 1);
    }

    if (this.tries >= 7) {
      this.letterButton = true;
      this.lost = true;
      this.triesImg = "assets/img/hangman/hangmanLose.png"
    }
  }

  reload() {
    location.reload();
  }

}