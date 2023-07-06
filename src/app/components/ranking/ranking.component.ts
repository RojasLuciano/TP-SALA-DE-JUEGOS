import { Component, OnInit } from '@angular/core';
import { RankingService } from 'src/app/services/ranking/ranking.service';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss']
})
export class RankingComponent implements OnInit {

  constructor(public rankingService: RankingService) { }

  ngOnInit(): void {
    this.rankingService.loadRanking();
  }

}
