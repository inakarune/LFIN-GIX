import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { GameService } from '../services/game.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  fundingList = [];
  dealingList = [];

  constructor(private gameService: GameService, public sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.getGameList();
  }

  getGameList() {
    this.gameService.getGames()
      .subscribe(
        res => {
          res.forEach(game => game.status === 'funding' ? this.fundingList.push(game) : this.dealingList.push(game));
        },
        err => console.error(err)
      );
  }

  photoURL(url: string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }


}
