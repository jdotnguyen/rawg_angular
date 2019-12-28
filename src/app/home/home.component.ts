import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/shared/services/home.service';

// Import interface
import { HomeGame } from 'src/shared/interfaces/home';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // Latest games
  latestGamesArray: HomeGame [];

  constructor(
    private _homeService: HomeService
  ) { }

  ngOnInit() {
    // Get list of games
    this._homeService.getLatestGames()
      .subscribe(data => {
        this.latestGamesArray = data['results'];
      },
      error => {console.log(error)});
  }

}
