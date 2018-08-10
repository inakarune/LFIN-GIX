import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GameService } from '../services/game.service';
import { DomSanitizer } from '@angular/platform-browser';
import { CompanyService } from '../services/company.service';

@Component({
  selector: 'app-funding-page',
  templateUrl: './funding-page.component.html',
  styleUrls: ['./funding-page.component.scss']
})
export class FundingPageComponent implements OnInit {
  game;
  company;
  condition = false;

  constructor(
    private route: ActivatedRoute,
    private gameService: GameService,
    public sanitizer: DomSanitizer,
    private companyService: CompanyService
  ) { }

  ngOnInit() {
    this.getGame();
  }

  toggleCondition() {
    this.condition = !this.condition;
  }

  getGame() {
    const id = this.route.snapshot.paramMap.get('game');
    const that = this;

    this.gameService.getGame(id)
      .subscribe(game => {
        this.game = game;
        that.getCompany(this.game._id);
      },
      err => console.error(err));
  }

  getCompany(id: string) {
    this.companyService.getCompany(id)
      .subscribe(
        company => this.company = company,
      err => console.error(err)
    );
  }

}
