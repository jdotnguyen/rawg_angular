import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/shared/services/game.service';
import { ActivatedRoute } from '@angular/router';

// Interface
import { Game } from 'src/shared/interfaces/game';

@Component({
  selector: 'app-game-info',
  templateUrl: './game-info.component.html',
  styleUrls: ['./game-info.component.scss']
})
export class GameInfoComponent implements OnInit {
  // Game details
  gameDetails: Game;

  constructor(
    private _activatedRoute: ActivatedRoute
    , private _gameService: GameService
  ) { }

  ngOnInit() {
    // Get query params before running game service call
    this._activatedRoute.queryParams
      .subscribe(params => {
        // Get game details
        let game_id = params.id;

        this._gameService.getGameDetails(game_id)
          .subscribe((data: Game) => {
            this.gameDetails = data;
            console.log(this.gameDetails);
          });
      });
  }

  // History back
  goBack() {
    window.history.back();
  }
}
